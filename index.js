require("dotenv").config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1 style='margin: 50px; width: 100vw;'>Hello World!</h1>");
})

app.listen(process.env.PORT, () => {
    console.log(`Express app listening on port ${process.env.PORT}`);
});