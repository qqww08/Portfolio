const express = require("express");
const next = require("next");
const jsonServer = require("json-server");
const imgRouter = require("./routes/multer");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use("/api", jsonServer.router("db.json"));
  server.use("/image", imgRouter, express.static("uploads"));

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> ✨Ready on http://localhost:${port}`);
  });
});
