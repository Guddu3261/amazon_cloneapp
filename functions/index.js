/* eslint-disable max-len */
const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const {request} = require("express");
const stripe=require("stripe")("sk_test_51MolalSIZsCzZOlJko4P0ljquDhr6PwfT0TL2Lb8APmenn0DJ1ICt5DLMzz7nPqdWZFVS3hcPof5DHMNmzQosXMI00qN4lqSEc");
// Api


// -App config
const app=express();
// Middleware
app.use(cors({origin: true}));
app.use(express.json());
// --APi roues
app.get("/", (request, response)=>response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved  amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "us",
  });
  // OK - Created
  response.status(201).send({
    client_secret: paymentIntent.client_secret,
  });
});


// Listen Command
// http://localhost:5000/clone-3bd96/us-central/api/hello
exports.api=functions.https.onRequest(app);

