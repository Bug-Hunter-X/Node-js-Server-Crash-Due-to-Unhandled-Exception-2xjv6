const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is where the bug occurs
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});