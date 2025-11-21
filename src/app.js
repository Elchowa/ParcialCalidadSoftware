const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Express' });
});

module.exports = app;
