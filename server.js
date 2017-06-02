//server.js

//BASE SETUP
//----------------------------------------
const express = require( 'express' );
const app = express();

const port = process.env.PORT || 3000;

//ROUTES
//----------------------------------------

//sample route
app.get('/sample', (req, res, next) => {
  res.send('This is our sample route');
});

//more routes here


//START THE SERVER
//----------------------------------------

app.listen(port, () => { console.log(`listening on port ${port}`) });
