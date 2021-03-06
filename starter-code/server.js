'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file
// Estimated: 5 mins, but it took 10 mins

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
// Estimated: 5 mins, It took 10 mins plus github was down for like 15 minutes

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

// TODO: Include all of the static resources as an argument to app.use()
// expected to take 10 mins but it took 5 minutes
app.use(express.static('./public'));

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
// Done estimated: 10 min, actual: 5min

app.get('/new', function(req, res) {
  res.sendFile('new.html', {root:'./public'});
});


app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html,
  // and log that form data to the console. We will wire this up soon to actually
  // write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  // Done estimate 5 min, actual: 2min
  console.log(`Node is listening on Port number: ${PORT}`);
});
