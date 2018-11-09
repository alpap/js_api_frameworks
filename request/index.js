var request = require('request');
var ab = require('ab');

function rq() {
	request('http://localhost:3000', function(error, response, body) {
		// console.log('error:', error); // Print the error if one occurred
		// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		// console.log('body:', body); // Print the HTML for the Google homepage.
		return;
	});
}
ab.run(rq, {
	concurrency: 50,
	requests: 100000,
});
