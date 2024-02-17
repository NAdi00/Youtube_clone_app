const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');

// Connection URI
const uri = 'mongodb+srv://Admin1:1800@cluster0.46nr2lj.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection URI and database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

const app = express();

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Middleware for authentication
function requireLogin(req, res, next) {
  if (req.session.user) {
    // User is authenticated, proceed to the next middleware
    next();
  } else {
    // User is not authenticated, redirect to login page
    res.redirect('/login');
  }
}

//////This functions will run on login page/backend being directed from front it will check inputs vs those in database
// Login route
app.get('/login', (req, res) => {
  res.sendFIle('../frontend/login/login.html');
});
// Authentication route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Your authentication logic here
  if (username === 'admin' && password === 'password') {
    // Set user session upon successful login
    req.session.user = username;
    res.redirect('/');
  } else {
    res.send('Invalid credentials');
  }
});

// Secure route accessible only after login
app.get('/', requireLogin, (req, res) => {
  res.send('Secure Page');
});

/*

// Close the Mongoose connection when the Node.js process is terminated
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

*/

//const express = require('express');

app.get('/', async (req, res) => {
    res.status(500).send("<h1>hello world!!</h1>")
})

app.listen(5050, () => {
    console.log(`Server started on port ${5050}`)
})