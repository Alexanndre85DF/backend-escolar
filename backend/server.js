import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import './index.js'; // opcional, se quiser incluir rotas aqui

const app = express();

app.use(cors());
app.use(express.json());

// Rota de debug para testar se o front envia corretamente
app.post('/debug', (req, res) => {
  console.log('🔎 Dados recebidos no /debug:', req.body);
  res.status(200).send('Recebido!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


