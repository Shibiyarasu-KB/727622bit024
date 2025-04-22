import axios from 'axios';
import express from 'express';

const router = express.Router();

const BASE_URL = 'http://20.244.56.144/evaluation-service';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ1MzA4NTI5LCJpYXQiOjE3NDUzMDgyMjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmZGE1M2RiLTBmZTctNDU5MS1iMGM5LTFiNzIwNDU4N2Q0NCIsInN1YiI6IjcyNzYyMmJpdDAyNEBtY2V0LmluIn0sImVtYWlsIjoiNzI3NjIyYml0MDI0QG1jZXQuaW4iLCJuYW1lIjoic2hpYml5YXJhc3UgayBiIiwicm9sbE5vIjoiNzI3NjIyYml0MDI0IiwiYWNjZXNzQ29kZSI6Imp0QnV6dSIsImNsaWVudElEIjoiNWZkYTUzZGItMGZlNy00NTkxLWIwYzktMWI3MjA0NTg3ZDQ0IiwiY2xpZW50U2VjcmV0IjoiQ2JqekR2Y2ZjWHpNdEZociJ9.Nb2vOzqaNpOGHYii75CnmlJAJRPto1OH-wB-rJYpNW0';

const axiosConfig = {
    headers: {
        Authorization: AUTH_TOKEN
    }
};

// GET /users route to fetch users
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/users`, axiosConfig);
        res.json(response.data.users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

export default router;
