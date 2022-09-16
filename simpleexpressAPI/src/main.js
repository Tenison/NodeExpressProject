const express = require("express")

const app = express()
//
app.use(express.json())//to refactor/parse only serialized data(JSON) coming from client api request and ignores non-JSON resquest

//app.listen() starts running the API on the server

app.listen(4000, () =>{
    console.log(`Server Started`)
})

app.get("/", (received, sendBack) =>{
        sendBack.send("request received, welcome boo")
})

app.get("/dontview", (received, sendBack) =>{
    sendBack.send(received.params)
})

app.get("/statusInfo", (received, sendBack) =>{
    sendBack.sendStatus(500).send("hicd le")
})