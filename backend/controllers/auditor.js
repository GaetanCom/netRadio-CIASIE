const express = require('express');
const app = express();
var http = require('http').createServer(app);
var mySocket = require('socket.io')(http);


mySocket.on("connection", () => {
    console.log(("connect"));
})
var AudioContext = require('web-audio-api').AudioContext, context = new AudioContext
var buffer, bufferSource;

const play = async (req, res, next) => {

    mySocket.on('stream', function (packet) {
        //console.log(deserialize(packet));
        buffer = context.createBuffer(1, 16384, 10000)
        bufferSource = context.createBufferSource()
        buffer.copyToChannel(deserialize(packet), 0)
        bufferSource.buffer = buffer
        bufferSource.connect(context.destination)
        bufferSource.start();
    });

};

const stop = async (req, res, next) => {

    mySocket.on('stream', function (packet) {
        //console.log(deserialize(packet));
        buffer = context.createBuffer(1, 16384, 10000)
        bufferSource = context.createBufferSource()
        buffer.copyToChannel(deserialize(packet), 0)
        bufferSource.buffer = buffer
        bufferSource.connect(context.destination)
        bufferSource.stop();
    });

};