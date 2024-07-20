/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// index.js (Firebase Cloud Function)
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUserInFirestore = functions.auth.user().onCreate(async (user) => {
  const userRef = admin.firestore().collection('users').doc(user.uid);
  try {
    await userRef.set({
      email: user.email,
      role: 'user', // Default role
    });

    // Optionally check and set a single admin if needed
    
  } catch (error) {
    console.error('Error creating user in Firestore:', error);
  }
});
