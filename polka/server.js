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

// simple token auth
// async function authenticate(req, res, next) {
// 	let token = req.headers['authorization'];
// 	if (!token) return (res.statusCode = 401), res.end('No token!');
// 	req.user = await Users.find(token); // <== fake
// 	next(); // done, woot!
// }

app.use(one, two);

app.get('/users/:id', async (req, res) => {
	console.log(`~> Hello, ${req.foo}`);
	res.end(`User: ${req.params.id}`);
});

app.get('/users/:id/books/:title', async (req, res) => {
	let { id, title } = req.params;
	res.end(`User: ${id}  Book: ${title}`);
});

app.listen(4000, err => {
	if (err) throw err;
	console.log(`> Running on localhost:3000`);
});
