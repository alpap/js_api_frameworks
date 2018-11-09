const polka = require('polka');
const app = polka();

function one(req, res, next) {
	req.hello = 'world';
	next();
}

function two(req, res, next) {
	req.foo = '...needs better demo 😔';
	next();
}

polka()
	.use(one, two)
	.get('/users/:id', (req, res) => {
		console.log(`~> Hello, ${req.foo}`);
		res.end(`User: ${req.params.id}`);
	})
	.listen(4000, err => {
		if (err) throw err;
		console.log(`> Running on localhost:3000`);
	});
