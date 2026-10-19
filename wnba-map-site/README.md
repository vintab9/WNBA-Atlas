# WNBA Atlas

A responsive, dependency-free prototype for exploring WNBA team cities and game days.

## Run locally

Because this prototype has no build dependencies, serve the folder with any static server:

```bash
python3 server.py
```

Then open `http://localhost:4173`.

## Connecting your API

The server reads `SPORTRADAR_API_KEY` and `SPORTRADAR_ACCESS_LEVEL` from `.env`, calls Sportradar's Teams feed, and keeps the key off the browser. The sample team data at the top of [`app.js`](./app.js) is used as a fallback if the feed is unavailable.

## Adding team landscape images

Add landscape images to an `images` folder, then add an `image` property to a team record in [`app.js`](./app.js):

```js
image: "images/new-york-liberty.jpg"
```

The image is automatically used as the background of the team panel's image area. Use a wide image such as 1200x500 pixels; the dark overlay keeps the team label readable.

## Adding official team websites

Add each team's official URL to its `website` property in [`app.js`](./app.js):

```js
{
  name: "New York Liberty",
  short: "NY",
  website: "https://liberty.wnba.com/"
}
```

The `VIEW TEAM WEBSITE` link opens the selected team's URL in a new browser tab.

## Adding team logos to map markers

Add each logo file to the `images` folder, then enter its path in the `teamLogos` object near the top of [`app.js`](./app.js):

```js
const teamLogos = {
  ny: "images/liberty-logo.png",
  la: "images/sparks-logo.png"
};
```

Markers use the team's abbreviation until a logo path is provided. Transparent PNG or SVG files work best.
