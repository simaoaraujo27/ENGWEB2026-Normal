const Livro = require('../models/livro');

module.exports.list = (search) => {
  let query = {};
  if (search) {
    query = {
      $or: [
        { titulo: { $regex: search, $options: 'i' } },
        { autor: { $regex: search, $options: 'i' } },
        { genero: { $regex: search, $options: 'i' } }
      ]
    };
  }
  return Livro.find(query).exec();
};

module.exports.insert = (livro) => {
  const novo = new Livro(livro);
  return novo.save();
};

module.exports.updateLido = (id) => {
  return Livro.findById(id).then(livro => {
    if (livro) {
      livro.lido = !livro.lido;
      return livro.save();
    }
    return null;
  });
};

module.exports.remove = (id) => {
  return Livro.findByIdAndDelete(id).exec();
};
