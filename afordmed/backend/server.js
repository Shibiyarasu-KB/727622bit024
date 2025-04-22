import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { postsRoute } from './posts.js'; // Use the named import

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base URL for API requests
const BASE_URL = 'http://20.244.56.144/evaluation-service';

// Authorization header with Bearer token
const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ1MzA4NTI5LCJpYXQiOjE3NDUzMDgyMjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmZGE1M2RiLTBmZTctNDU5MS1iMGM5LTFiNzIwNDU4N2Q0NCIsInN1YiI6IjcyNzYyMmJpdDAyNEBtY2V0LmluIn0sImVtYWlsIjoiNzI3NjIyYml0MDI0QG1jZXQuaW4iLCJuYW1lIjoic2hpYml5YXJhc3UgayBiIiwicm9sbE5vIjoiNzI3NjIyYml0MDI0IiwiYWNjZXNzQ29kZSI6Imp0QnV6dSIsImNsaWVudElEIjoiNWZkYTUzZGItMGZlNy00NTkxLWIwYzktMWI3MjA0NTg3ZDQ0IiwiY2xpZW50U2VjcmV0IjoiQ2JqekR2Y2ZjWHpNdEZociJ9.Nb2vOzqaNpOGHYii75CnmlJAJRPto1OH-wB-rJYpNW0'
};

// Fetch users route
app.get('/users', async (req, res) => {
    try {
        // Fetch users from the external service
        const response = await axios.get(`${BASE_URL}/users`, { headers });
        console.log("Users response:", response.data);
        // Return the users data
        res.json(response.data.users);
    } catch (err) {
        console.error("Error fetching users:", err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Fetch posts route
app.use('/posts', postsRoute); // Use the postsRoute middleware here

// Start the server
app.listen(5000, () => {
    console.log('✅ Server running on http://localhost:5000');
});
