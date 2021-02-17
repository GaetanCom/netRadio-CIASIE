const express = require('express');
const app = express();

const local_post = 19080;

const audioRoutes = require('./routes/audio-routes');

app.get('/', (req, res, next) => {
    res.send("Application Netradio")
});

app.use('/auditor/play', (req, res) => {audioRoutes})

app.listen(local_post, () => {
    console.log("Server on port ", local_post);
});