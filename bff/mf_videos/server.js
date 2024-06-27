const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

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
