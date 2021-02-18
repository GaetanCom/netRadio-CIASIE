const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

exports.play = async (req, res, next) => {

    let AudioContext = require('web-audio-api').AudioContext, context = new AudioContext
    let buffer, bufferSource;
    
    io.on('stream',  (packet) => {
        //console.log(deserialize(packet));
        buffer = context.createBuffer(1, 16384, 10000)
        bufferSource = context.createBufferSource()
        buffer.copyToChannel(deserialize(packet), 0)
        bufferSource.buffer = buffer
        bufferSource.connect(context.destination)
        bufferSource.start();
    });

};

exports.stop = async (req, res, next) => {

    io.on('stream', function (packet) {
        //console.log(deserialize(packet));
        buffer = context.createBuffer(1, 16384, 10000)
        bufferSource = context.createBufferSource()
        buffer.copyToChannel(deserialize(packet), 0)
        bufferSource.buffer = buffer
        bufferSource.connect(context.destination)
        bufferSource.stop();
    });

};