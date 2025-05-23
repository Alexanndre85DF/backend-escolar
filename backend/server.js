import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rota para salvar dados do formulário
app.post('/api/enviar', async (req, res) => {
  try {
    const data = req.body;
    const campos = [
      data.municipio, data.escola, data.data, data.tecnico, data.equipe,
      data.pergunta0, data.pergunta1, data.pergunta2, data.pergunta3, data.pergunta4,
      data.pergunta5, data.pergunta6, data.pergunta7, data.pergunta8, data.pergunta9,
      data.observacoes
    ];

    await pool.query(`
      INSERT INTO acompanhamentos (
        municipio, escola, data_visita, tecnico, equipe,
        pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
        pergunta6, pergunta7, pergunta8, pergunta9, pergunta10,
        observacoes
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
    `, campos);

    res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para listar dados
app.get('/api/listar', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM acompanhamentos ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar dados');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
