const express = require('express');
const app = express();
const port = 3050;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const { showFavoriteVideos } = require('./public/scripts_module');
app.get('/show-favorites', (req, res) => {
    showFavoriteVideos();
    res.json({message: 'acessou a rota'});
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = { app, port };
