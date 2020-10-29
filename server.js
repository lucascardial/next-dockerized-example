/* server.js */

const express = require("express");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const port = process.env.EXTERNAL_PORT || 3000;

    server.listen(port, err => {
      if (err) throw err;
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });