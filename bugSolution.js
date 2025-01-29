const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    // Request handling logic
    res.send('Hello, world!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});