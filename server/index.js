const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const volleyball = require('volleyball');

app.use(express.json());
app.use(volleyball)
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));


app.use((err, req, res, next)=> {
  console.error(err);
  res.status(500).send({ message: err. message });
});


const port = process.env.PORT || 3000;

db.sync()
  .then(()=> {
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  });
