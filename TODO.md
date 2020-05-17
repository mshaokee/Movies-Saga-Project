
## Installation
#### basics
[ ] npm install
[ ] npm install react-router-dom
[ ] npm install @material-ui/core
[ ] npm run server, npm run client to get browser running
#### database
[ ] transfer data from database.sql to your database, I used Postico.
[ ] create 3rd table that junctions movies and genres / add FOREIGN KEY
[ ] assign genres to movies as desired
#### routing
[ ] import BrowserRouter and Route to path through pages in App
[ ] import Link in components as needed
#### display movie list
[ ] import components into App
[ ] connect components as needed
[ ] set up movie router in server to GET id, title, poster, description from DB
[ ] dispatch for movies and genres to display on home page load
[ ] create rootSaga to yield takeEvery and send to generator
[ ] in get generator, axios call to get then yield put to send data to reducer
[ ] in Home component map through reduxState of movies into SpecificMovie component
[ ] display movie title, img with poster, and movie description through props
#### details
[ ] create back button that Links to home page
[ ] import Link and wrap the img with Link to details page
[ ] dispatch payload of data from movie list in SpecificMovie to new reducer selectMovie to take in current movie
[ ] return payload
[ ] load genres on page with a dispatch to genres through a get genres generator
[ ] set up genres server router with a JOIN sequel
[ ] yield put to send data to our genres reducer
[ ] display title and description with reduxState
[ ] map through genres into MovieGenres component
[ ] set empty variable and render it
[ ] create if statement if movieGenre title is the same as selectMovie title set the empty variable to display movieGenre name
[ ] if else movie id set to select movie id so that genre stays on page after going back to movie list

#### editing
[ ] create state that will hold id, title, and description
[ ] create change title and change description functions
[ ] these functions will be onChange and setState to their new values
[ ] create two inputs for title and description
[ ] input 1 will onChange to title, input 2 will onChange to description
[ ] set default values by defaultValues of the reduxState data we have from movie list
[ ] create cancel button that routes back to details
[ ] create submit button that onClick does submit function and routes back to details
[ ] submit function dispatches state to edit movies and current movies to redisplay on details
[ ] edit movie generator do put request with data sent through dispatch
[ ] set up put router in movies router, update sequel and cleanse 
[ ] database information should change and details page will update