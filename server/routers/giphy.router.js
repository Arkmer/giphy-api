const express = require('express');
const router = express.Router();

const axios = require('axios'); // Get the axios!

const apiKey = process.env.GIPHY_API_KEY;
console.log('Key is', apiKey);

// This is the 1st request/response to/from our server
router.get('/', (request, response) => {
    console.log('Req', request, 'res', response)
    let url = `http://api.giphy.com/v1/gifs/search?q=${request}&api_key=${apiKey}&limit=5`;
    axios.get(url)
    // This is a 2nd HTTP request/response, use different variable names
    .then( (res) => {
      // response is 1st server response, res is 2nd response from giphy 
      response.send( res.data );
    })
    .catch ( (error) => {
      console.log('Error on giphy request', error);
    })
});

module.exports = router;