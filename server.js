var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// catch 404 and forward to error handler
server.get('/', (req, res) => {
  return res.status(200).json({
    ok: true,
    message: 'root route',
  });
});
server.use(function (req, res, next) {
  next(createError(404));
});

/* // error handler
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */
server.listen(3001, () => {
  console.log(`Running on 3001`);
});
module.exports = server;
