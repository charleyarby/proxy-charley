const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/rooms/:id', express.static(path.join(__dirname, 'public/lib')));

app.listen(port, ()=>{console.log(`server running at :http://localhost:${port}`)})