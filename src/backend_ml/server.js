// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const app = express()
// const PORT = process.env.PORT || 5000

// app.use(cors())
// app.use(bodyParser.json())

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/aegishealth', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// })

// const User = mongoose.model('User', userSchema)

// // Register a new user
// app.post('/api/register', async (req, res) => {
//   const { email, password } = req.body
//   const hashedPassword = await bcrypt.hash(password, 10)
//   const user = new User({ email, password: hashedPassword })

//   try {
//     await user.save()
//     res.status(201).json({ message: 'User registered successfully' })
//   } catch (error) {
//     res.status(500).json({ error: 'Error registering user' })
//   }
// })

// // Login user
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body
//   const user = await User.findOne({ email })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     const token = jwt.sign({ userId: user._id }, 'secret_key', {
//       expiresIn: '1h',
//     })
//     res.json({ token })
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' })
//   }
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })
const http = require('http')
const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || 5000

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'aegishealth'
const collectionName = 'users'

// Create a MongoDB client
const client = new MongoClient(mongoURI, { useUnifiedTopology: true })

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect()
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  }
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
  const { method, url } = req

  // Handle registration
  if (url === '/api/register' && method === 'POST') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const { email, password } = JSON.parse(body)

      if (!email || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Email and password are required' }))
        return
      }

      try {
        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Insert the user into the database
        await collection.insertOne({ email, password: hashedPassword })

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'User registered successfully' }))
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Error registering user' }))
      }
    })
  }

  // Handle login
  else if (url === '/api/login' && method === 'POST') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const { email, password } = JSON.parse(body)

      if (!email || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Email and password are required' }))
        return
      }

      try {
        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        // Find the user in the database
        const user = await collection.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
          // Generate a JWT token
          const token = jwt.sign({ userId: user._id }, 'secret_key', {
            expiresIn: '1h',
          })

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ token }))
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Invalid credentials' }))
        }
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Internal server error' }))
      }
    })
  }

  // Handle unknown routes
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Route not found' }))
  }
})

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectToMongoDB()
})
