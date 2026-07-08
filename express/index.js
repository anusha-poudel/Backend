import express from 'express';

const app = express();
const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});