import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Listar todos os registros
app.get('/assessoramentos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM assessoramentos ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar novo registro
app.post('/assessoramentos', async (req, res) => {
  try {
    const {
      municipio, escola, data, tecnico, equipe,
      pergunta0, pergunta1, pergunta2, pergunta3, pergunta4,
      pergunta5, pergunta6, pergunta7, pergunta8, pergunta9,
      observacoes
    } = req.body;

    const result = await pool.query(
      `INSERT INTO assessoramentos (
        municipio, escola, data, tecnico, equipe,
        pergunta0, pergunta1, pergunta2, pergunta3, pergunta4,
        pergunta5, pergunta6, pergunta7, pergunta8, pergunta9,
        observacoes
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16
      ) RETURNING *`,
      [
        municipio, escola, data, tecnico, equipe,
        pergunta0, pergunta1, pergunta2, pergunta3, pergunta4,
        pergunta5, pergunta6, pergunta7, pergunta8, pergunta9,
        observacoes
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir registro
app.delete('/assessoramentos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM assessoramentos WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 