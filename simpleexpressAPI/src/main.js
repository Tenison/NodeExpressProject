const express = require("express")

const app = express()

app.listen(4000, () =>{
    console.log("Server Started")
})

app.get("/", (received, sendBack) =>{
        sendBack.send("request received, welcome boo")
})

app.get("/dontview", (received, sendBack) =>{
    sendBack.sendStatus(500)
})