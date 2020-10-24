const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const movieData = require("./data.json");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("/api/v1/movies", (req, res) => {
    return res.json(movieData);
  });
  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    console.log(JSON.stringify(movie));
    return res.json({ ...movie, createdTime: "today", author: "Aftab" });
  });
  server.patch("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ message: `Updating post of id: ${id}` });
  });
  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ message: `Delete post of id:  ${id}` });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.get("/faq", (req, res) => {
    res.send(`
      <html>
            <head></head>
            <body>
                <h1>html dirext render on example page</h1>
            </body>
        </html>
    `);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
