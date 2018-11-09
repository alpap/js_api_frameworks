const { send } = require('micro');
const { router, get } = require('micro-fork');

const hello = async (req, res) => send(res, 200, await Promise.resolve(`Hello ${req.params.id}`));
const book = async (req, res) =>
	send(res, 200, await Promise.resolve(`Hello ${req.params.id} ${req.params.name}`));

module.exports = router()(get('/users/:id/book/:name', book), get('/user/:id', hello));

// const { router, post } = require('micro-fork')
// const { json, send } = require('micro')

// const user = async (req, res) => {
// 	const body = await json(req)
// 	send(res, 200, body)
// }

// module.exports = router()(
// 	post('/user', user)
// )

// // test.js
// const request = require('some-request-lib')

// const body = { id: 1 }
// const response = await request.post('/user', { body })
