import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as express from 'express'

//const serviceAccount = local dev requires this & the lines 
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const contactsCollection = "DistributionMembers"

const app = express();

interface Contact {
    Name: String
    Email: String
}

// define a route handler for the default home page
app.post( "/signup", async ( req, res ) => {
    // render the index template
    console.log(req.body.name);
    console.log(req.body.email);
    try {

        const contact: Contact = {
            Name: req.body.name,
            Email: req.body.email
        }

        const newContact = await firebaseHelper.firestore
            .createNewDocument(db, contactsCollection, contact);
        console.log("add document ", newContact.id)
        //res.status(201).send(`Created a new contact: ${newContact.id}`);
        res.status(201).redirect("/contact/thanks");
    } catch (error) {
        console.log("Error: ", error)
        //make a contact invalid page that gets rendered at this path
        res.status(400).redirect("/invalidcontact");
    }  
});

export const pp = functions.https.onRequest(app);