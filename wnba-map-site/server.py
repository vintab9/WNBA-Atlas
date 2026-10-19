import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).parent


def load_env():
    env_file = ROOT / ".env"
    if not env_file.exists():
        return
    for line in env_file.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def sportradar(path):
    load_env()
    api_key = os.environ.get("SPORTRADAR_API_KEY")
    access_level = os.environ.get("SPORTRADAR_ACCESS_LEVEL", "trial")
    if not api_key:
        raise RuntimeError("SPORTRADAR_API_KEY is missing from .env")
    url = f"https://api.sportradar.com/wnba/{access_level}/v8/en/{path}"
    request = Request(url, headers={"accept": "application/json", "x-api-key": api_key})
    with urlopen(request, timeout=20) as response:
        return json.loads(response.read().decode("utf-8"))


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        try:
            if parsed.path == "/api/teams":
                payload = sportradar("league/teams.json")
                self.send_json(payload)
                return
            super().do_GET()
        except Exception as error:
            self.send_json({"error": str(error)}, status=502)

    def send_json(self, payload, status=200):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    load_env()
    print("WNBA Atlas running at http://localhost:4173")
    ThreadingHTTPServer(("localhost", 4173), Handler).serve_forever()
