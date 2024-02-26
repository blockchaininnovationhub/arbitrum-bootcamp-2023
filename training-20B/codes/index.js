const express = require("express")

const app = express()

app.get("/", function(req, res) {
    res.send("hello world")
})

app.post("/", function(req, res) {
    res.send("hello world")
})

app.delete("/", function(req, res) {
    res.send("hello world")
})


app.patch("/", function(req, res) {
    res.send("hello world")
})

app.put("/", function(req, res) {
    res.send("hello world")
})

app.get("/api", function(req, res) {
    res.json({data: "hello world"})
})

app.get("/api/:name/:id", function(req, res) {
    const name = req.params.name;
    const id = req.params.id;

    res.status(200).json({data: "hello world", id, name})
})

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
  