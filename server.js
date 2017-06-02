//server.js

//------------------------------------------------------
//        BASE SETUP
//------------------------------------------------------
const express = require( 'express' );
const app = express();

const port = process.env.PORT || 3000;

//------------------------------------------------------
//        ROUTES SECTION
//------------------------------------------------------

    //-------------------------------------------------------
    //        GET AN INSTANCE OF ROUTER
    //-------------------------------------------------------
    const router = express.Router();

    //-------------------------------------------------------
    //        MIDDLEWARE - WILL HAPPEN ON EVERY REQUEST (IN-ORDER)
    //------------------------------------------------------
    router.use((req, res, next) => {
      console.log(req.method, req.url);
      //you need to tell middleware that you are done and continue
      //going to the next stmt...
      next();
    });

    // route middleware to validate :name
    router.param('name', (req, res, next, name) => {
        // do validation on name here
        // logging something so we know its working
        console.log(`doing name validations on ${name}`);

        // once validation is done save the new item in the req
        let newName = `${name} Santiago!!!`;
        req.name = newName;
        // go to the next thing
        next();
    });

    //-------------------------------------------------------
    //        ROUTES
    //-------------------------------------------------------

    router.get('/', (req, res, next) => {
      res.send('We are on the Home Page');
    });

    router.get('/about', (req, res, next) => {
      res.send('We are on the About Page');
    });

    router.get('/hello/:name', (req, res, next) => {
      //we did some validation and save the name to req.name:
      res.send(`original entry: Hello ${req.params.name} -----> after validation middleware: Hello ${req.name}`);
    });

    //-------------------------------------------------------
    //        ROUTES --  USING app.route()
    //-------------------------------------------------------

    router.route('/login')

        // show/get the form
        .get(function(req, res) {
            res.send('this is the login form');
        })

        // process the form
        .post(function(req, res) {
            console.log('processing');
            res.send('processing the login form!');
        });

//-------------------------------------------------------
//        MIDDLEWARE: APPLY ROUTES TO APP
//-------------------------------------------------------
app.use('/', router);

//-------------------------------------------------------
//        START THE SERVER
//-------------------------------------------------------
app.listen(port, () => { console.log(`listening on port ${port}`) });
