const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://TheMovieWatcher:Elm2112@moviewatcher.hsps3gi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function createUser(username, password) {
  try {
    await client.connect();

    const usersCollection = client.db('moviewatcher').collection('users');

    // Insert a new user document
    const result = await usersCollection.insertOne({ username, password });

    console.log(`User created with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Example usage
//createUser('john_doe', 'password123').catch(console.error);


app.use(express.json());
app.use(cors());

// Example endpoint to fetch movies from Movie DB
app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular',
      {
        params: {
          api_key: '3bdfc3b2356527dcbaeb001d3950b8f7',
          // Add other parameters as needed
        },
      }
    );

    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
