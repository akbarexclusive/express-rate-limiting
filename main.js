const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();


app.use( rateLimit({

windowMs : 60 * 1000,
max: 10,
message : "To many requests, Try later"

}));


app.get('/user', (req,res) => {
  res.send({status: 200, message: "Welcome to my application "})
})


app.listen(3000, () => { console.log("Service stared at 3000") });





