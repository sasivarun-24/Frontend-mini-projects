const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8081;

// Load users from JSON file
const filePath = path.join(__dirname, 'user.json');
const usersData = fs.readFileSync(filePath, 'utf8');
let users = JSON.parse(usersData);

// Ensure each user has an 'id' property (if not present)
users = users.map((user, index) => ({
  id: user.id || index + 1, // Assigns index+1 as id if not present
  ...user
}));

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Root: Basic HelloWorld (optional)
app.get('/', (req, res) => {
  res.send('HelloWorld');
});

// API message endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// API users endpoint with artificial delay (3 seconds)
app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.json(users);
  }, 3000); // 3 second delay
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

