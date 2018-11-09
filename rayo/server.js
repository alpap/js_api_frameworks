const rayo = require('rayo');

const compress = require('@rayo/compress');

// "age" handler
// const age = (req, res, step) => {
// 	req.age = 21;
// 	step();
// };

// // "name" handler
// const name = (req, res, step) => {
// 	req.name = `Super ${req.params.user}`;
// 	step();
// };

rayo({ port: 3000 })
	.through(compress())
	// .get('/hello/:user', age, name, (req, res) => {
	.get('/user/:id', (req, res) => {
		res.setHeader('content-type', 'text/html');
		res.end(`{
			age: ${req.params.id},
			name: req.name,
		}`);
	})
	.start();
