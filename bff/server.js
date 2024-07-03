const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.post('/transfer-string', (req, res) => {
    const { cachedIds } = req.body;
    console.log('Rota acessada no segundo MFE', cachedIds);
    res.json({ message: 'Dados recebidos com sucesso no BFF' });

    // console.log(JSON.stringify({cachedIds}));

    // if(cachedIds === undefined) {
    //     console.log('Erro: cachedIds não definido');
    //     res.status(400).json({ message: 'Erro: cachedIds não definido' });
    //     return;
    // } else {
    //     const url = 'http://localhost:3080/get-string';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ cachedIds }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Dados enviados com sucesso para o segundo MFE:', data);
    //         res.json({ message: 'Dados recebidos e encaminhados com sucesso' });
    //     })
    //     .catch(error => {
    //         console.error('Erro ao enviar dados para o segundo MFE:', error);
    //         res.status(500).json({ message: 'Erro ao enviar dados para o segundo MFE' });
    //     });
    // }   
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
