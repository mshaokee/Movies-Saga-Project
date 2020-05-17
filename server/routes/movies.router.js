const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//GET ROUTER
router.get('/', (req, res) => {
    //get all movies and descriptions and titles
    console.log('in /movies GET');
    let queryString = `
    SELECT "id", "title", "poster", "description" 
    FROM "movies" 
    ORDER BY "id" ASC;`;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        alert('Error in GET Movie Router. Check console.')
        console.log(err);
        res.sendStatus(500);
    });//end pool
});//end GET ROUTER

//PUT ROUTER
router.put('/:id', (req, res) => {
    //req.params.id will be the specified movie id, will change through SQL!
    //req.body is a object!
    //set variables for simplicity
    let movieId = req.params.id;
    let movieTitle = req.body.title;
    let movieDesc = req.body.description;
    console.log('in /movies PUT ----------------', req.body, req.params);
    //querystring
    let queryString = `
    UPDATE "movies" 
    SET "title" = ($1), "description" = ($2)
    WHERE "id" = ($3)
    ;`;
    //pool query, select using bling.
    pool.query(queryString, [movieTitle, movieDesc, movieId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        alert('Error /movies put router. Check console.');
    });//end pool query
});//end put

module.exports = router;