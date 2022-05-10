const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const db = require('./db/connection');
const consoletable= require('console.table');



//express.statis is middleware function that can take all of the contents of a folder and serve them as static assets
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });