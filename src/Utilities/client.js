let axios = require('axios');

let axiosInstance = axios.create({
    baseURL: 'http://ec2-3-14-129-89.us-east-2.compute.amazonaws.com:8080/',
});

module.exports = axiosInstance;
