var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var about = require('./routes/about');
var taragenyx = require('./routes/taragenyx');
var focusgames = require('./routes/focusgames');
var honoursProject = require('./routes/honoursProject');
var freelance = require('./routes/freelance');
var appleStore = require('./routes/appleStore');
var haus = require('./routes/haus');
var normanMclaren = require('./routes/normanMclaren');
var dataVis = require('./routes/dataVis');
var projectionM = require('./routes/projectionM');
var soundV = require('./routes/soundV');
var mask = require('./routes/mask');
var arduino = require('./routes/arduino');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about.html', about);
app.use('/taragenyx.html', taragenyx);
app.use('/focusgames.html', focusgames);
app.use('/honoursProject.html', honoursProject);
app.use('/freelance.html', freelance);
app.use('/appleStore.html', appleStore);
app.use('/haus.html', haus);
app.use('/normanMclaren.html', normanMclaren);
app.use('/dataVis.html', dataVis);
app.use('/projectionM.html', projectionM);
app.use('/soundV.html', soundV);
app.use('/mask.html', mask);
app.use('/arduino.html', arduino);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
