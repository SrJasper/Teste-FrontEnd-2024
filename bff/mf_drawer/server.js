const express = require("express");
const path = require("path");
const app = express();
const port = 3080;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let lastCachedIds = '';

app.post("/get-string", (req, res) => {
  if (req.body.cachedIds === undefined) {
    // Se cachedIds não estiver definido, retorne o último valor armazenado
    console.log("Rota acessada no segundo MFE - cachedIds não definido, retornando último valor:", lastCachedIds);
    res.json({ cachedIds: lastCachedIds });
} else {
    // Se cachedIds estiver definido, atualize lastCachedIds e retorne o valor
    const { cachedIds } = req.body;
    lastCachedIds = cachedIds;
    console.log("Rota acessada no segundo MFE - cachedIds definido:", cachedIds);
    res.json({ cachedIds });
}
});

// Rota para servir o 'index.html'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`mf_drawer ready`);
});
