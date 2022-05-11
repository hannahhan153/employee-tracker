const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

const path = require('path');
const inquirer = require('inquirer');
const consoletable = require('console.table');


//express.statis is middleware function that can take all of the contents of a folder and serve them as static assets
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// Start server after DB connection
  db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });