const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 🔥 Pastikan ini ke AUTH SERVICE (Laravel)
const AUTH_SERVICE = 'http://127.0.0.1:8001/api';

// ==========================
// TEST ROUTE (WAJIB)
// ==========================
app.get('/api/test', (req, res) => {
    res.json({ message: 'Gateway OK' });
});

// ==========================
// AUTH ROUTES
// ==========================

// REGISTER
app.post('/api/register', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE}/register`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(
            error.response?.data || { error: 'Gateway error (register)' }
        );
    }
});

// LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE}/login`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(
            error.response?.data || { error: 'Gateway error (login)' }
        );
    }
});

// ME (Protected)
app.get('/api/me', async (req, res) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE}/me`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(
            error.response?.data || { error: 'Unauthorized or token invalid' }
        );
    }
});

// LOGOUT
app.post('/api/logout', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE}/logout`, {}, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(
            error.response?.data || { error: 'Logout failed' }
        );
    }
});

// REFRESH TOKEN
app.post('/api/refresh', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE}/refresh`, {}, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(
            error.response?.data || { error: 'Token refresh failed' }
        );
    }
});

// ==========================
// START SERVER
// ==========================
app.listen(8000, () => {
    console.log('🚀 Gateway running on http://127.0.0.1:8000');
});