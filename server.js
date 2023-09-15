const express = require('express');
const fs = require('fs'); // Import the file system module
const app = express();
const port = 3000;

app.use('/', express.static('public'));

// Define the path to your JSON file
const budgetFilePath = 'budget.json';



app.get('/budget', (req, res) => {
  // Read the JSON file and send its contents as the response
  fs.readFile(budgetFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Parse the JSON data and send it as the response
    const budgetData = JSON.parse(data);
    res.json(budgetData);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
