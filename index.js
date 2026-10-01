const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ mensagem: 'Olá do container Docker!' });
});

app.get('/saude', (req, res) => {
  res.json({ status: 'ok', hostname: require('os').hostname() });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});