// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose    = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/onBoardRealTimeSeatMap');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(require('./routes/routes'));
app.use('/seats/', require('./routes/seatRoutes'));
app.use('/clients/', require('./routes/clientRoutes'));
app.use('/categories/', require('./routes/categoryRoutes'));
app.use('/categories/:category_id/items', require('./routes/itemRoutes'));


// START THE SERVER
// =============================================================================
app.listen(process.env.PORT, process.env.IP, done);
console.log('Magic happens on port ' + port);