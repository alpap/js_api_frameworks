// https

// const https = require('https');
// const service = require('restana')({
//     server: https.createServer({
//         key: keys.serviceKey,
//         cert: keys.certificate
//     })
// });

// https2

// const http2 = require('http2')
// const pem = require('pem')

// pem.createCertificate({
//   days: 1,
//   selfSigned: true
// }, (err, keys) => {
//   if (err) console.error(err)

//   const service = require('./../index')({
//     server: http2.createSecureServer({
//       key: keys.serviceKey,
//       cert: keys.certificate
//     })
//   })

//   service.get('/v1/welcome', (req, res) => {
//     res.send('Hello World!')
//   })

//   service.start()
// })

//middleware

// custom middleware to attach the X-Response-Time header to the response
// service.use((req, res, next) => {
//     let now = new Date().getTime();
 
//     res.on('response', e => {
//         e.res.setHeader('X-Response-Time', new Date().getTime() - now);
//     });
 
//     return next();
// });

//turbo http

const server = require('restana/libs/turbo-http');
const service = require('restana')({
    server
});

// const service = require('restana')({})


// some fake "star" handler
service.get('/user/:user', async (req, res) => {
    const user = await req.params.user;
   res.send("the user is "+user);
});



// some fake "star" handler
service.get('/user/:user/book/:book', async (req, res) => {
    const user = await req.params.user;
    const book = await req.params.book;
   res.send("the user is "+user+" and the book "+book);
});


service.start(3000).then((server) => {});