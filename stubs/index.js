const express = require("express");
const app = express();

const api = require('./api');

app.use(express.static("dist"));
app.use("/api", api);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log("Listening on port 3000!"));

module.exports = app;