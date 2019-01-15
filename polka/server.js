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

async function logger(req, res, next) {
	console.log(`~> Received ${req.method} on ${req.url}`);
	next(); // move on
}

// simple token auth
// async function authenticate(req, res, next) {
// 	let token = req.headers['authorization'];
// 	if (!token) return (res.statusCode = 401), res.end('No token!');
// 	req.user = await Users.find(token); // <== fake
// 	next(); // done, woot!
// }

// better auth
// function authorize(req, res, next) {
// 	// mutate req; available later
// 	req.token = req.headers['authorization'];
// 	req.token ? next() : ((res.statusCode = 401) && res.end('No token!'));
// }

// middleware
// app.use(one, two, logger);

// routes
app
	.get('/user/:id', async (req, res) => {
		res.end(`User: ${req.params.id}`);
	})
	// .get('/users/:id/books/:title', async (req, res) => {
	// 	let { id, title } = req.params;
	// 	res.end(`User: ${id}  Book: ${title}`);
	// });

app.listen(3000, err => {
	if (err) throw err;
	console.log(`> Running on localhost:3000`);
});

// example polka tagets specific routes it doesnt itterate through all of them
// Polka()
// 	.get('/', get)
// 	.use(foo)
// 	.get('/users/123', user)
// 	.use('/users', users)

// errors from midlleware are passed using next
// polka()
// 	.use((req, res, next) => next('💩'))
// 	.get('*', (req, res) => res.end('wont run'));
