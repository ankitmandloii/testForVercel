const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, Vercel with Express!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
