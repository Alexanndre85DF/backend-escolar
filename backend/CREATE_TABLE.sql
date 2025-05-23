CREATE TABLE assessoramentos (
  id SERIAL PRIMARY KEY,
  municipio VARCHAR(100) NOT NULL,
  escola VARCHAR(200) NOT NULL,
  data DATE NOT NULL,
  tecnico VARCHAR(100) NOT NULL,
  equipe VARCHAR(200),
  pergunta0 TEXT,
  pergunta1 TEXT,
  pergunta2 TEXT,
  pergunta3 TEXT,
  pergunta4 TEXT,
  pergunta5 TEXT,
  pergunta6 TEXT,
  pergunta7 TEXT,
  pergunta8 TEXT,
  pergunta9 TEXT,
  observacoes TEXT
); 