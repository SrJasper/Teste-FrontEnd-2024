const express = require('express');
const app = express();
const port = 3050;

app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/videos', (req, res) => {
    res.sendFile(__dirname + '/public/videos.html');
});

app.get('/favoritos', (req, res) => {
    res.sendFile(__dirname + '/public/favoritos.html');
});

app.listen(port, () => {
    console.log(`mf_drawer listening at http://localhost:${port}`);
});
