import axios from 'axios';

// Key: 5ef62714e0606fa6d6e4fff79608b8f6480ea4b8

// Base url: https://api-ssl.bitly.com/v4/

export const key = '5ef62714e0606fa6d6e4fff79608b8f6480ea4b8';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
    },
});

export default api;