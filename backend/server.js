import express from 'express';
const port = 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('server is ready to run');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});