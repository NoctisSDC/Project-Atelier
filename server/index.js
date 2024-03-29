const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');

let port = process.env.PORT || 3000;

let app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});