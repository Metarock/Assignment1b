/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const google = require('./GoogleToken.js');
const app = express();

const routes = require('./routes/api/evidences');
const googleRoutes = require('./routes/api/googles')

// connect to DB
connectDB();
console.log('hello ', google());
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//     res.send("Hello world! Team assignment 1b");
// });

app.use('/api/evidences', routes);
app.use('/api/googles', googleRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Api running');
  });
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Serving running on port ${port}`);
})
