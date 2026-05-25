const Jogo = require('../models/jogo');

module.exports.list = (editora) => {
  if (editora) {
    return Jogo.find({ "editoras.name": editora }, { _id: 0, id: 1, name: 1, year: 1 }).exec();
  }
  return Jogo.find({}, { _id: 0, id: 1, name: 1, year: 1, category: 1, minPlayers: 1 }).exec();
};

module.exports.findById = (id) => {
  return Jogo.findOne({ id: id }).exec();
};

module.exports.insert = (jogo) => {
  const novoJogo = new Jogo(jogo);
  return novoJogo.save();
};

module.exports.update = (id, jogo) => {
  return Jogo.findOneAndUpdate({ id: id }, jogo, { new: true }).exec();
};

module.exports.remove = (id) => {
  return Jogo.findOneAndDelete({ id: id }).exec();
};

module.exports.listAutores = () => {
  return Jogo.aggregate([
    { $unwind: "$autores" },
    {
      $group: {
        _id: "$autores.name",
        jogos: { $push: { id: "$id", name: "$name" } }
      }
    },
    { $sort: { _id: 1 } },
    {
      $project: {
        _id: 0,
        autor: "$_id",
        jogos: 1
      }
    }
  ]).exec();
};

module.exports.listCategorias = () => {
  return Jogo.aggregate([
    {
      $group: {
        _id: "$category",
        jogos: { $push: { id: "$id", name: "$name" } }
      }
    },
    { $sort: { _id: 1 } },
    {
      $project: {
        _id: 0,
        categoria: "$_id",
        jogos: 1
      }
    }
  ]).exec();
};
