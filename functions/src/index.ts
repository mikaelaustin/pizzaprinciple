import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as express from 'express'

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
        res.status(201).send(`Created a new contact: ${newContact.id}`);
    } catch (error) {
        console.log("Error: ", error)
        res.status(400).send(`Contact should only contains firstName, lastName and email!!!`);
    }  

    //res.redirect("/contact/thanks");
});

export const pp = functions.https.onRequest(app);