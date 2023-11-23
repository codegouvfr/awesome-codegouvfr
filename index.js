const express = require("express");

const tools = require("./tools.js");

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get("/publiccode", (request, response) => {
    const repositoryUrl = request.query.repository_url;
    tools.ecosystemToPubliccode(repositoryUrl).then(publiccode => {
        response.send(publiccode);
    }).catch(error => {
        console.log(error);
    })
});
