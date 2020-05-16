const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));


//require routers
const moviesRouter = require('./routes/movies.router');

/** ---------- ROUTES ---------- **/
//movies router
app.use('/movies', moviesRouter);
//genres router
app.use('/genres', genresRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});