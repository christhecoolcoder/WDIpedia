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
const studentsRouter = require('./routes/studentsRouter');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/student', studentsRouter);


app.get('/', (req, res) => {
  res.send('home page');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});


