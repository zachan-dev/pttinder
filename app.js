const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/uploads', express.static(process.cwd() + '/uploads'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Handle the user session
const IN_PROD = process.env.NODE_ENV === 'production'
const TWO_HOURS = 1000 * 60 * 60 * 2
const options ={
    connectionLimit: 10,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
}

const sessionStore = new mysqlStore(options);

app.use(session({
  name: process.env.SESS_NAME,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  secret: process.env.SESS_SECRET,
  cookie: {
      maxAge: TWO_HOURS,
      sameSite: true,
      secure: IN_PROD
  }
}))

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