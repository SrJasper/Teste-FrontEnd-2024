# Use a imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que o aplicativo vai usar (opcional, depende de como seu código Node.js está configurado)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "Server.js"]
