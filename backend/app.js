const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const multer  = require('multer') //use multer to upload blob data
const upload = multer(); // set multer to be the upload variable (just like express, see above ( include it, then use it/set it up))
const fs = require('fs');

let websockets = []

// const audioRoutes = require('./routes/audio-routes');
const auditor = require('./controllers/auditor');

io.on("connection", function (ws) {
    console.log('New Socket connection');
    websockets.push(ws)
    console.log(websockets.length);
    ws.on("stream", (data) => {

        io.emit("stream", data)
    })
    ws.on("guestStream", (data) => {

        io.emit("guestStream", data)
    })

    ws.on("disconnect", function () {
        websockets = websockets.filter(function (otherWS) {
            return ws !== otherWS
        })
    })

})



app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send("Application Netradio")
});
app.post('/audioUpload', upload.single("audioBlob"), (req, res) => {
    console.log(req.file);
  let uploadLocation = __dirname + '/uploads/' + req.file.originalname // where to save the file to. make sure the incoming name has a .wav extension

  fs.writeFileSync(uploadLocation, Buffer.from(new Uint8Array(req.file.buffer))); // write the blob to the server as a file
  res.sendStatus(200); //send back that everything went ok

});
app.get('/streamer', (req, res) => {
    res.sendFile("streamer.html", {
        root: "public"
    })
});
app.get('/presenter', (req, res) => {
    res.sendFile("presenter.html", {
        root: "public"
    })
});
app.get('/guest', (req, res) => {
    res.sendFile("guest.html", {
        root: "public"
    })
});

app.use('/auditor/play', (req, res) => {audioRoutes})


http.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port`);
});