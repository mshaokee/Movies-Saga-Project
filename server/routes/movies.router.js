const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//GET ROUTER
router.get('/', (req, res) => {
    //get all movies and descriptions and titles
    console.log('in /movies GET');
    let queryString = 'SELECT "id", "title", "poster", "description" FROM "movies";';
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        alert('Error in GET Movie Router. Check console.')
        console.log(err);
        res.sendStatus(500);
    });//end pool
});//end GET ROUTER

module.exports = router;