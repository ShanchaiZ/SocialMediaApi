//Required libraries
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/SocialMediaApi', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//This code below is used to mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`App is connected on localhost:${PORT}`));