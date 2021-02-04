import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wX-6R8xox2CbLCmNAxB-CVcDVmdbDt2Ij0kCnh6tjX4rUayldDbIUslqH0mnnAw4CeEu_SAtxhuwp-E6C7m2jrsEtFrdYu-PAdGYM2ABwszziiTQB9dnzj1C3b4YYHYx'
    }
});

yelp.get('/search')