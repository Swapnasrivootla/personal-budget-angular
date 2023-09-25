const express = require('express');
const cors=require('cors');
// const fs = require('fs'); // Import the file system module
const app = express();
const port = 3000;
const data = require("./data.json");

app.use(cors());
const budget = { 
  myBudget: [
  {
      title: 'Eat Out',
      budget: 30
  },
  {
      title: 'Rent',
      budget: 350
  },
  {
      title: 'Groceries',
      budget: 90
  }
]};
app.use('/', express.static('public'));
app.get('/budget', (req, res) => {
  res.send(data);
});


app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
