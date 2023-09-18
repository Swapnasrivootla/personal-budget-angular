const express = require('express');
// const fs = require('fs'); // Import the file system module
const app = express();
const port = 3000;
const data = require("./budget.json");
app.use('/', express.static('public'));

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

app.get('/budget', (req, res) => {
  res.send(data);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
