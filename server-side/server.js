// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose    = require('mongoose'); 

var crudApi = require('app_modules/crud-api');

mongoose.connect('mongodb://localhost:27017/onBoardRealTimeSeatMap');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(require('./routes'));
app.use('/seats/', crudApi.seats.routes);
app.use('/categories/', crudApi.categories.routes);
app.use('/items/', crudApi.items.routes);
app.use('/pnrs/', crudApi.pnrs.routes);

app.use('/clients-rest/', require('./clients-rest').routes);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);