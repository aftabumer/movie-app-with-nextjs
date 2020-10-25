const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const filePath = "./data.json";
const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");
const movieData = require(filePath);

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

  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = movieData.find((movie) => movie.id === id);

    return res.json(movie);
  });

  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    movieData.push(movie);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(movieData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json("Movie has successfully added");
    });
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = movieData.findIndex((movie) => movie.id === id);

    movieData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(movieData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json("Movie has successfully delete");
    });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // server.get("/faq", (req, res) => {
  //   res.send(`
  //     <html>
  //           <head></head>
  //           <body>
  //               <h1>html dirext render on example page</h1>
  //           </body>
  //       </html>
  //   `);
  // });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
