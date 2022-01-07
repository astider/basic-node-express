import express from 'express';

const port = 3000;
const app = express();

app.get('/', function (req, res) {
  const { name } = req.query;
  res.send(`Hello World ${name ?? ''}`);
});

app.get('/query', function (req, res) {
  const { name } = req.query;
  res.send(`Hello World ${name ?? ''}`);
});

app.get('/content/:id', function (req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).send('bad request');
  }
  if (1 <= id && id <= 100) {
    return res.send(`browing content id: ${id}`);
  }
  res.status(404).send('not found');
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
