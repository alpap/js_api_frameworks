// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/user/:name', async (request, reply) => {
	reply.send('hello ' + request.params.name);
});

fastify.get('/users', async (request, reply) => {
	reply.send(`User: salam`);
});

// Run the server!
const start = async () => {
	try {
		await fastify.listen(3000);
		fastify.log.info(`server listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();
