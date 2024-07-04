const express = require("express");
const app = express();
const port = 3050;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let lastType;
app.post("/show-videos", (req, res) => {
  console.log("req.body", req.body);
  if (!req.body?.type) {
    res.json({ type: lastType });
  } else {
    const { type } = req.body;
    lastType = type;
    res.json({ type });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`mf_videos runing`);
});

module.exports = { app, server };
