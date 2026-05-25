const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');

const crypto = require('node:crypto');
if (!globalThis.crypto) {
  globalThis.crypto = crypto;
}

const app = express();

const mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/livrosdb';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const PORT = process.env.PORT || 19020;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
