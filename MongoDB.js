var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	  
	//create new mongo schema

	var detailsSchema = new mongoose.Schema({
		name: String,
		address: String,
		age: Number
	});

	// Create a details model using the detailsSchema as above.

	var Details = mongoose.model('Details', detailsSchema);
	var susan = new Details({
		name: 'Susan',
		address: '123 London Street',
		age: '31'  
	});

	susan.save(function(err, susan) {
	  if (err) return console.error(err);
	  console.dir(susan);
	}); 


	// Query to find all details and print them
	Details.find(function(err, Details) {
	  if (err) return console.error(err);
	  console.dir(Details);
	});

});

mongoose.connect('mongodb://');

	