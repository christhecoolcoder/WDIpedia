// require('./models');
// require('./controllers');

const path  = require('path');
const logger = require('morgan');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', (req, res) => {
    // res.send('serving up and running')
    res.sendFile(__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })

app.listen(PORT, () => {
    console.log('Port 3000 ready to serve');
});
