const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors');

const app = express();

// Bodyparser Middleware  cors
app.use(cors());
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/customers', require('./routes/api/customers'));
app.use('/api/invoices', require('./routes/api/invoices'));
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/articlepatterns', require('./routes/api/articlepatterns'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/salarys', require('./routes/api/salarys'));
app.use('/api/mail', require('./routes/api/mail'));
//app.use(express.static('client/build'));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});
// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
