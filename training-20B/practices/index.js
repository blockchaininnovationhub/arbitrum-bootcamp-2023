const express = require("express")

const app = express()


// a route  methods
app.get('', async function(req, res) {
    res.send("Welcome Home sending GET request")
})

app.post('', async function(req, res) {
    res.send("Welcome Home sending POST request")
})

app.delete('', async function(req, res) {
    res.send("Welcome Home sending DELETE request")
})

app.get('/profile/:id', async function(req, res) {

    const userID = req.params.id;

    if(userID === "admin") {
        return res.status(500).json({ userID })
    }
    res.json({ userID, message: "ok"})
})


app.listen(3000, function() {
    console.log("server started");
})