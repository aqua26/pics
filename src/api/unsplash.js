import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization: 
        'Client-ID dBWgjRiqE09fqOzzkH3SVPvluaF-MGdX9ObweKiPwlw'
    }   
});