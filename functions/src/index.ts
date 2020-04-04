import * as functions from 'firebase-functions';
import * as express from 'express'

const app = express();

// define a route handler for the default home page
app.get( "/signup", ( req, res ) => {
    // render the index template
    console.log(req)
    res.send("test")
    //res.render( "/contact/thanks" );
} );

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const pp = functions.https.onRequest(app);
