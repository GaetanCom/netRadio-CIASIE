const express = require('express');
var cors = require('cors');
const app = express();
let http = require('http').createServer(app);
var io = require('socket.io')(http);


const local_post = 3000;

const audioRoutes = require('../backend/routes/audio-routes');

// http.createServer((req, res) => {
//     const headers = {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
//       'Access-Control-Max-Age': 2592000, // 30 days
//       /** add other headers as per requirement */
//     };
  
//     if (req.method === 'OPTIONS') {
//       res.writeHead(204, headers);
//       res.end();
//       return;
//     }
  
//     if (['GET', 'POST'].indexOf(req.method) > -1) {
//       res.writeHead(200, headers);
//       res.end('Hello World');
//       return;
//     }
  
//     res.writeHead(405, headers);
//     res.end(`${req.method} is not allowed for the request.`);
//   }).listen(local_post);

// io.on("connection", (ws) => {
//     // console.log('New Socket connection');
//     console.log('new client connected');
//     socket.emit('connection', null);
//     // websockets.push(ws)
//     // console.log(websockets.length);
//     // ws.on("stream", (data) => {

//     //     io.emit("stream", data)
//     // })
//     // ws.on("guestStream", (data) => {

//     //     io.emit("guestStream", data)
//     // })

//     // ws.on("disconnect", function () {
//     //     websockets = websockets.filter(function (otherWS) {
//     //         return ws !== otherWS
//     //     })
//     // })
// });

app.get('/app/test', (req, res, next) => {
    res.send("Application Netradio")
});

// app.use('/', (req, res) => {audioRoutes})

