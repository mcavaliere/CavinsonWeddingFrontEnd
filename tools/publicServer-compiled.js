'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-console */

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_express2.default.static(__dirname + '/public'));
// app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});

app.listen(port, function () {
  console.log('Node app is running on port', app.get('port'));
});
