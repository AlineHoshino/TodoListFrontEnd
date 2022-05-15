// Arquivo responsável pela conexão de dados com o MongoDB
const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://AlineHoshino:<trybe123#vqv>@cluster0.gqh25.mongodb.net/annotations?retryWrites=true&w=majority';

const conection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopogy: true,
});

module.exports = conection;
