const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('req.query', req.query);
    console.log(`req.query.query: ${req.query.query}`);

    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.query.query}&type=movie`)
    .then(response => {
        console.log(`response.data: ${response.data}`);
        res.send(response.data);
    }) // end .then
    .catch(err => {
        console.error(`ACK, we had some trouble getting that movie... ${err}`);
        res.sendStatus(500);
    }) // end .catch, end axios.get
    
}); // end router.get

module.exports = router;