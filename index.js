const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("got");
    res.send("hello");
})

app.listen(1024, () => {
    console.log("running v2!");
})