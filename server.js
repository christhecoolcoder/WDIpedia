// // require('./models');
// // require('./controllers');

// const path  = require('path');
// const logger = require('morgan');
// const express = require('express');
// const bodyParser= require('body-parser')

// const PORT = 3000;

// const app = express();

// app.use(express.static('public'))

// app.set('view engine', 'ejs');

// app.use(logger('dev'));

// app.get('/', (req, res) => {
//     // res.send('serving up and running')
//     res.sendFile(__dirname + '/index.html')
// });

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
//   })

// app.listen(PORT, () => {
//     console.log('Port 3000 ready to serve');
// });

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const studentsRouter = require('./routes/studentsRouter');
// const methodoverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/students', studentsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.post('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.delete('/delete', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
