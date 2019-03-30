var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
var logger = require('morgan');
var bodyParser=require('body-parser');
const mysql = require('mysql');
const path = require('path');
var dashRouter = require('./routes/dash');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var authRouter = require('./routes/auth');

const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'nims',
  database: 'testing'
});
con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',loginRouter);
app.use('/dash', dashRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/auth',authRouter);

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

/* route to handle login and registration */

module.exports = app;
