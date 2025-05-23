import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import './index.js'; // opcional, se quiser incluir rotas aqui

const app = express();

app.use(cors());
app.use(express.json());

// Importa as rotas se você separou elas no `index.js`
// Sobe o servidor na porta exigida pelo Render
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
