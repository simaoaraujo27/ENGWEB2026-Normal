const express = require('express');
const router = express.Router();
const Livro = require('../controllers/livro');

router.get('/api/livros', (req, res) => {
  Livro.list(req.query.search)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro.message }));
});

router.post('/api/livros', (req, res) => {
  Livro.insert(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(500).json({ erro: erro.message }));
});

router.put('/api/livros/:id', (req, res) => {
  Livro.updateLido(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro.message }));
});

router.delete('/api/livros/:id', (req, res) => {
  Livro.remove(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro.message }));
});

module.exports = router;
