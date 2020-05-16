const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//GENRES
router.get('/', (req, res) => {
    //get all genres
    let queryString = `
    SELECT genres.id as genreid, genres.name as genrename, movies.id as movieid,
     title, description FROM genres
    JOIN relate ON genres.id = relate.genres_id
    JOIN movies ON movies.id = relate.movies_id;`
    pool.query(queryString).then((result)=> {
        res.sendStatus(result.rows);
    }).catch((err)=> {
        alert('Error on get genres router. Check console.');
        console.log(err);
        res.sendStatus(500);
    });//end query
});//end get router for genres

module.exports = router;