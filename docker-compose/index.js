const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

// As variáveis vêm do compose.yaml
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // vai ser "db", o nome do serviço!
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function criarTabela() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL
    )
  `);
  console.log('Tabela usuarios pronta');
}

app.get('/usuarios', async (req, res) => {
  const [linhas] = await pool.query('SELECT * FROM usuarios');
  res.json(linhas);
});

app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;
  const [resultado] = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    [nome, email]
  );
  res.status(201).json({ id: resultado.insertId, nome, email });
});

criarTabela().then(() => {
  app.listen(3000, () => console.log('API rodando na porta 3000'));
});