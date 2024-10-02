import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware to enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json()); // Add this to parse JSON bodies in POST requests

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body); // Access form data from req.body
  res.send('Form data received on server!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
