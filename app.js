const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/user.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes)

// ! For production level
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


const DB = 'mongodb+srv://A158_debug:U1t02eSrON6Ojf7G@kloudstac-0.lacdzaz.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`App is Listening on PORT:${PORT}`))).then(() => console.log("Connected to MonogoDB"))
  .catch((error) => console.log(error))

