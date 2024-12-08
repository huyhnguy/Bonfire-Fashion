var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const { Client } = require('pg');
 
const client = new Client({ 
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE, 
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
});
 
client.connect()
  .then(() => { 
    console.log('Connected to PostgreSQL database!'); 
  })
  .catch((err) => { 
    console.error('Error connecting to the database:', err); 
  });

const { Pool } = require('pg'); 
const pool = new Pool({ 
  user: 'me', 
  host: 'localhost', 
  database: 'api', 
  password: 'password', 
  port: '5432', 
  max: 20, // Maximum number of clients in the pool 
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed 
}); 
 
// Now you can use the pool to execute queries 
pool.query('SELECT * FROM users', (err, result) => { 
  if (err) { 
    console.error('Error executing query:', err); 
  } 
  else { 
    console.log('Query result:', result.rows); 
  } 
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
