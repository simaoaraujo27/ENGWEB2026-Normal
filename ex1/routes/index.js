const express = require('express');
const router = express.Router();
const Jogo = require('../controllers/jogo');

router.get('/jogos', (req, res) => {
  Jogo.list(req.query.editora)
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.get('/jogos/:id', (req, res) => {
  Jogo.findById(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.post('/jogos', (req, res) => {
  Jogo.insert(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.put('/jogos/:id', (req, res) => {
  Jogo.update(req.params.id, req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.delete('/jogos/:id', (req, res) => {
  Jogo.remove(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.get('/autores', (req, res) => {
  Jogo.listAutores()
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

router.get('/categorias', (req, res) => {
  Jogo.listCategorias()
    .then(dados => res.status(200).json(dados))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: erro.message });
    });
});

module.exports = router;
