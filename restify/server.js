var restify = require('restify');

var server = restify.createServer();

// before routing
// server.pre(restify.plugins.cpuUsageThrottle());

//returned for all routes
// server.use(function(req, res, next) {
// 	console.warn('run for all routes!');
// 	return next();
// });

// server.use([
// 	function(req, res, next) {
// 		if (req.contentLength() === 10) {
// 			res.send('done!');
// 			return next(false);
// 		}
// 		return next();
// 	},
// 	function(req, res, next) {
// 		console.log('true');
// 	},
// ]);

function respond(req, res, next) {
	res.send('hello ' + req.params.name);
	next();
}

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

// simple
server.get('/', function(req, res, next) {
	res.send('home');
	return next();
});

// using next steps
server.post(
	'/foo',
	function(req, res, next) {
		req.someData = 'foo';
		return next();
	},
	function(req, res, next) {
		res.send(req.someData);
		return next();
	},
);

server.listen(5050, function() {
	console.log('%s listening at %s', server.name, server.url);
});
