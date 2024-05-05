import axios from 'axios';

const Axios = axios.create({
 baseURL: 'https://movie-website-a80y.onrender.com/api/',
});

export default Axios;
