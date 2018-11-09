// const micro = require('micro');

// const server = micro(async (req, res) => {
// 	const statusCode = 200;
// 	const data = { error: 'Custom error message' };
// 	micro.send(res, statusCode, data);
// });

// server.listen(3000);

var microAPI = require('micro-api');

exports.default = microAPI([
	{
		method: 'get',
		path: '/',
		handler: hello,
	},
]);

function hello() {
	return 'Waddup fam!';
}
