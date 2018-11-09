var restify = require('restify');
var errors = require('restify-errors');
var server = restify.createServer();

// before routing
// server.pre(restify.plugins.sanitizePath());

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
// server.post(
// 	'/foo',
// 	function(req, res, next) {
// 		req.someData = 'foo';
// 		return next();
// 	},
// 	function(req, res, next) {
// 		res.send(req.someData);
// 		return next();
// 	},
// );

// errors
server.get('/error', (req, res, next) => {
	// var err = new errors.NotFoundError({
	// 	cause: 'aha',
	// 	info: { foo: 'bar' },
	// });
	return next(new errors.ConflictError("I just don't like you"));
});

// verssioned api
server.get(
	'/version/test',
	restify.plugins.conditionalHandler([
		{
			version: ['2.0.0', '2.1.0', '2.2.0'],
			handler: function(req, res, next) {
				res.send(200, {
					requestedVersion: req.version(),
					matchedVersion: req.matchedVersion(),
				});
				return next();
			},
		},
	]),
);

//static localhost:5050/docs/info.json

server.get(
	'/docs/*',
	restify.plugins.serveStatic({
		directory: './html',
		default: 'index.html',
		appendRequestPath: false,
	}),
);

server.listen(5050, function() {
	console.log('%s listening at %s', server.name, server.url);
});
