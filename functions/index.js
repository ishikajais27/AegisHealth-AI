/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https')
const logger = require('firebase-functions/logger')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage()
const path = require('path')
const os = require('os')
const fs = require('fs')
const pandas = require('pandas-js')
const sklearn = require('scikit-learn')

admin.initializeApp()

exports.predictDiabetes = functions.https.onRequest(async (req, res) => {
  const bucket = storage.bucket('your-bucket-name')
  const modelFilePath = path.join(os.tmpdir(), 'diabetes_model.pkl')
  const datasetFilePath = path.join(os.tmpdir(), 'diabetes.xlsx')

  // Download model and dataset
  await bucket
    .file('diabetes_model.pkl')
    .download({ destination: modelFilePath })
  await bucket.file('diabetes.xlsx').download({ destination: datasetFilePath })

  // Load model
  const model = sklearn.loadModel(modelFilePath)

  // Load dataset
  const dataset = pandas.readExcel(datasetFilePath)

  // Extract features (assuming the dataset has a specific structure)
  const features = dataset.drop('target', (axis = 1)).values

  // Make predictions
  const predictions = model.predict(features)

  // Send response
  res.json({ predictions: predictions.tolist() })
})
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
