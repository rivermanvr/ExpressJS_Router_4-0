//server.js

//BASE SETUP
//----------------------------------------
const express = require( 'express' );
const app = express();

const port = process.env.PORT || 3000;

//ROUTES
//----------------------------------------

//get an instance of router:
const router = express.Router();

//routes
router.get('/', (req, res, next) => {
  res.send('We are on the Home Page');
});

router.get('/about', (req, res, next) => {
  res.send('We are on the About Page');
});

//This is our middleware which will
//apply routes to our application:
app.use('/', router);

//START THE SERVER
//----------------------------------------

app.listen(port, () => { console.log(`listening on port ${port}`) });
