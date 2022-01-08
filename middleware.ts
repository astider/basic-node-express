import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
const cors = require('cors');

const port = 3000;
const app = express();

const corsOptions = {
  origin: [
    /localhost(:\d+)?$/,
    'https://www.google.com'
  ],
};

// 1. normal

app.get('/', function (req, res, next) {
  res.send(`Hello World normal`);
});

// 2. middleware

app.get('/middleware', (req, res, next) => {
  req.params = {
    someText: 'hello',
  };
  next();
}, (req, res) => {
  res.send(`modified params ${JSON.stringify(req.params)}`);
});

// 3. create middleware function

const middleWareFunction = (req: Request, res: Response, next: NextFunction) => {
  req.params = {
    someText: 'hello',
  };
  next();
};

app.get('/middleware2', middleWareFunction, (req, res) => {
  res.send(`modified params ${JSON.stringify(req.params)}`);
});

// 4. cors

app.get('/with-cors', cors(corsOptions), function (req, res, next) {
  const { name } = req.query;
  res.send('Hello World with cors');
});

app.post('/post-normal', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.post('/post-with-parser', bodyParser.json(), (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.post('/post-form-with-parser', bodyParser.urlencoded({ extended: false }), (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
