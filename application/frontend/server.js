const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

    res.send(`
        <h1>GitOps Demo</h1>
        <h2>Frontend Service</h2>
        <p>Deployment Successful!</p>
    `);

});

app.listen(PORT, () => {

    console.log(`Frontend running on port ${PORT}`);

});