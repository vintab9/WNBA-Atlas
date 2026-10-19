// Paste your public Mapbox token between the quotation marks.
const MAPBOX_TOKEN = "pk.eyJ1IjoiYnZpbnRhMjEiLCJhIjoiY21ndG02c3JjMDV5dzJqcHQ0bG9idjMwZiJ9.PZzFO3_t1Zr19fjUl0HXkQ";

// Add each team's logo path here, such as "images/liberty-logo.png".
const teamLogos = {
  ny: "images/ny-logo.png",
  la: "images/la-logo.png",
  lv: "images/vegas-logo.png",
  sea: "images/seattle-logo.png",
  phx: "images/phx-logo.png",
  min: "images/min-logo.png",
  chi: "images/chi-logo.png",
  ind: "images/indy-logo.png",
  atl: "images/atl-logo.png",
  was: "images/washington-logo.png",
  dal: "images/dallas-logo.png",
  ct: "images/connecticut-logo.png",
  sea2: "images/seattle-logo.png",
  tor: "images/to-logo.png",
  pdx: "images/phx-logo.png"
};

const teams = [
  { id: "ny", name: "New York Liberty", short: "NY", city: "Brooklyn, New York", image: "images/ny-header.jpg", arena: "Barclays Center", founded: "1997", conference: "Eastern", website: "https://liberty.wnba.com/", description: "The Liberty play with a fearless rhythm in the heart of Brooklyn. A city team with a global point of view.", x: 82, y: 43, color: "#6ECEB2" },
  { id: "la", name: "Los Angeles Sparks", short: "LA", city: "Los Angeles, California", image: "images/la-header.jpg", arena: "Crypto.com Arena", founded: "1997", conference: "Western", website: "https://mystics.wnba.com/", description: "A pioneering franchise with a legacy of changing the game on and off the court.", x: 10, y: 68, color: "#f5c94a" },
  { id: "lv", name: "Las Vegas Aces", short: "LV", city: "Las Vegas, Nevada", image: "images/vegas-header.jpeg", arena: "Michelob ULTRA Arena", founded: "2018", conference: "Western", website: "https://aces.wnba.com/", description: "A bold, high-energy team bringing championship basketball to the sports capital of the world.", x: 17, y: 62, color: "#c7b9f3" },
  { id: "sea", name: "Seattle Storm", short: "SEA", city: "Seattle, Washington", image: "images/seattle-header.jpg", arena: "Climate Pledge Arena", founded: "2000", conference: "Western", website: "https://storm.wnba.com/", description: "A force of nature in the Pacific Northwest, built on resilience, community, and titles.", x: 13, y: 25, color: "#f5c94a" },
  { id: "phx", name: "Phoenix Mercury", short: "PHX", city: "Phoenix, Arizona", image: "images/phx-header.jpg", arena: "Footprint Center", founded: "1997", conference: "Western", website: "https://mercury.wnba.com/", description: "Desert heat, a sharp edge, and a proud tradition of excellence in the Valley.", x: 24, y: 73, color: "#c7b9f3" },
  { id: "min", name: "Minnesota Lynx", short: "MIN", city: "Minneapolis, Minnesota", image: "images/min-header.jpg", arena: "Target Center", founded: "1999", conference: "Western", website: "https://lynx.wnba.com/", description: "A steady, smart team with deep roots in Minneapolis and a culture of winning.", x: 52, y: 38, color: "#f5c94a" },
  { id: "chi", name: "Chicago Sky", short: "CHI", city: "Chicago, Illinois", image: "images/chi-header.jpg", arena: "Wintrust Arena", founded: "2006", conference: "Eastern", website: "https://sky.wnba.com/", description: "South Side pride and a blue-collar identity, making every home game count.", x: 63, y: 52, color: "#f5c94a" },
  { id: "ind", name: "Indiana Fever", short: "IND", city: "Indianapolis, Indiana", image: "images/indy-header.jpeg", arena: "Gainbridge Fieldhouse", founded: "2000", conference: "Eastern", website: "https://fever.wnba.com/", description: "A team on the rise, connecting a new generation of fans to basketball in Indiana.", x: 67, y: 55, color: "#c7b9f3" },
  { id: "atl", name: "Atlanta Dream", short: "ATL", city: "Atlanta, Georgia", image: "images/atl-header.jpg", arena: "Gateway Center Arena", founded: "2008", conference: "Eastern", website: "https://dream.wnba.com/", description: "Atlanta's dreamers play with purpose, heart, and a city-sized sense of possibility.", x: 72, y: 73, color: "#f5c94a" },
  { id: "was", name: "Washington Mystics", short: "WSH", city: "Washington, D.C.", image: "images/washington-header.jpg", arena: "Entertainment & Sports Arena", founded: "1998", conference: "Eastern", website: "https://mystics.wnba.com/", description: "A proud capital-city team known for its grit, balance, and community spirit.", x: 79, y: 57, color: "#c7b9f3" },
  { id: "dal", name: "Dallas Wings", short: "DAL", city: "Arlington, Texas", image: "images/dallas-header.jpg", arena: "College Park Center", founded: "1998", conference: "Western", website: "https://wings.wnba.com/", description: "Fast, fearless basketball from the heart of North Texas.", x: 54, y: 78, color: "#f5c94a" },
  { id: "ct", name: "Connecticut Sun", short: "CT", city: "Uncasville, Connecticut", image: "images/connecticut-header.jpeg", arena: "Mohegan Sun Arena", founded: "1999", conference: "Eastern", website: "https://sun.wnba.com/", description: "A small-state team with a big defensive identity and a devoted home crowd.", x: 87, y: 49, color: "#c7b9f3" },
  { id: "sea2", name: "Golden State Valkyries", short: "GS", city: "San Francisco, California", image: "images/gs-header.jpg", arena: "Chase Center", founded: "2025", conference: "Western", website: "https://valkyries.wnba.com/", description: "The newest WNBA home, bringing a fearless new era of basketball to the Bay.", x: 8, y: 57, color: "#f5c94a" },
  { id: "tor", name: "Toronto Tempo", short: "TOR", city: "Toronto, Ontario", image: "images/to-header.jpg", arena: "Coca-Cola Coliseum", founded: "2026", conference: "Eastern", website: "https://tempo.wnba.com/", description: "The WNBA's first Canadian franchise brings fast, fearless basketball to the Greater Toronto Area.", x: 73, y: 29, color: "#c7b9f3" },
  { id: "pdx", name: "Portland Fire", short: "PDX", city: "Portland, Oregon", image: "images/portland-header.jpeg", arena: "Moda Center", founded: "2026", conference: "Western", website: "https://fire.wnba.com/", description: "A new Pacific Northwest home for the WNBA, built around Portland's unmistakable basketball culture.", x: 17, y: 35, color: "#f5c94a" }
];

const teamCoordinates = {
  ny: [-73.9754, 40.6826],
  la: [-118.2673, 34.0430],
  lv: [-115.1785, 36.1029],
  sea: [-122.3321, 47.5929],
  phx: [-112.0712, 33.4457],
  min: [-93.2760, 44.9795],
  chi: [-87.6742, 41.8623],
  ind: [-86.1680, 39.7640],
  atl: [-84.5510, 33.7573],
  was: [-76.9946, 38.8981],
  dal: [-97.0936, 32.7473],
  ct: [-72.0895, 41.4917],
  sea2: [-122.3875, 37.7676],
  tor: [-79.4153, 43.6435],
  pdx: [-122.6668, 45.5316]
};

teams.forEach(team => {
  team.coordinates = teamCoordinates[team.id];
  team.logo = teamLogos[team.id];
});

mapboxgl.accessToken = MAPBOX_TOKEN;
const initialMapView = {
  center: [-96, 39],
  zoom: 3.25
};
const map = new mapboxgl.Map({
  container: "mapboxMap",
  style: "mapbox://styles/mapbox/light-v11",
  center: initialMapView.center,
  zoom: initialMapView.zoom,
  minZoom: 2.5,
  maxZoom: 10,
  maxBounds: [
    [-140, 20], // southwest corner
    [-50, 75]   // northeast corner
  ]
});
map.addControl(new mapboxgl.NavigationControl(), "top-right");
map.on("click", () => {
  map.flyTo(initialMapView);
});

let mapMarkers = [];
let selectedTeam = teams[0];
let activeConference = "all";

function renderPins() {
  const query = document.querySelector("#teamSearch").value.trim().toLowerCase();
  const visibleTeams = teams.filter(team => {
    const matchesConference = activeConference === "all" ||
      team.conference.toLowerCase() === activeConference.toLowerCase();
    const matchesSearch = !query ||
      `${team.name} ${team.city} ${team.short}`.toLowerCase().includes(query);
    return matchesConference && matchesSearch;
  });

  mapMarkers.forEach(marker => marker.remove());
  mapMarkers = visibleTeams.map(team => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "pin" + (selectedTeam === team ? " selected" : "");
    pin.style.setProperty("--team-color", team.color);
    pin.dataset.id = team.id;
    pin.ariaLabel = `Show ${team.name}, ${team.city}`;
    pin.innerHTML = `<span class="pin-shape">${team.logo ? `<img src="${team.logo}" alt="" />` : team.short}</span><span class="pin-popup"><strong>${team.name}</strong><small>${team.city}</small></span>`;
    pin.onclick = event => {
      event.stopPropagation();
      selectTeam(team);
      map.flyTo({ center: team.coordinates, zoom: 6.5 });
    };

    return new mapboxgl.Marker({ element: pin, anchor: "bottom" })
      .setLngLat(team.coordinates)
      .addTo(map);
  });
}

function selectTeam(team) { selectedTeam = team; document.querySelectorAll(".pin").forEach(p => p.classList.toggle("selected", p.dataset.id === team.id)); setTeamLogo(team); document.querySelector("#teamName").innerHTML = team.name.replace(" ", "<br />"); document.querySelector("#teamLocation").textContent = team.city; document.querySelector("#teamDescription").textContent = team.description; document.querySelector("#teamArena").textContent = team.arena; document.querySelector("#teamFounded").textContent = team.founded; document.querySelector("#teamConference").textContent = team.conference; document.querySelector("#teamLink").href = team.website || "#"; setTeamImage(team) }
function setTeamLogo(team) {
  const logo = document.querySelector("#teamLogo");
  logo.replaceChildren();
  logo.style.background = team.color;
  if (!team.logo) {
    logo.textContent = team.short;
    return;
  }
  const image = document.createElement("img");
  image.src = team.logo;
  image.alt = `${team.name} logo`;
  image.addEventListener("error", () => {
    logo.replaceChildren();
    logo.textContent = team.short;
  }, { once: true });
  logo.append(image);
}
function setTeamImage(team) { const image = document.querySelector("#teamImage"); image.alt = `${team.name} team image`; image.hidden = !team.image; image.src = team.image || ""; }
document.querySelector("#teamSearch").addEventListener("input", renderPins);
document.querySelectorAll(".conference-button").forEach(button => button.addEventListener("click", () => { activeConference = button.dataset.conference; document.querySelectorAll(".conference-button").forEach(item => item.classList.toggle("active", item === button)); renderPins() }));
renderPins(); selectTeam(teams[0]);

async function loadSportradarData() {
  try {
    const teamsResponse = await fetch("/api/teams");
    if (!teamsResponse.ok) throw new Error("Sportradar request failed");
    const teamsPayload = await teamsResponse.json();
    if (teamsPayload.error) throw new Error("Sportradar proxy returned an error");
    const wnbaAliases = ["SEA", "PDX", "MIN", "DAL", "GSV", "LVA", "LAS", "PHX", "IND", "CON", "ATL", "WAS", "TOR", "CHI", "NYL"];
    const realTeams = teamsPayload.teams?.filter(team => wnbaAliases.includes(team.alias)) || [];
    if (realTeams.length) {
      realTeams.forEach(team => {
        const aliases = { NYL: "NY", LAS: "LA", LVA: "LV", PHX: "PHX", GSV: "GS", CON: "CT" };
        const local = teams.find(item => item.short === (aliases[team.alias] || team.alias) || item.name.includes(team.name));
        if (local) { local.name = `${team.market} ${team.name}`; local.short = team.alias; local.sportradarId = team.id }
      });
      renderPins(); selectTeam(teams[0]);
    }
  } catch (error) { console.info("Using demo team data until the Sportradar feed is available.", error.message) }
}
loadSportradarData();
