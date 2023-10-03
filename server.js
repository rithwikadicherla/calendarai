


const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('calendar ai app!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});