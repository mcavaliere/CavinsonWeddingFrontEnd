import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import favicon from 'serve-favicon';


/*eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '..', 'public', 'images')));
// app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

// app.get('/bundle.js', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/bundle.js'))
// });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function() {
  console.log('Node app is running on port', port);
});
