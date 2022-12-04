const express = require("express");
const app = express();

const root = __dirname + "/dist";

app.use(express.static(root));

app.get("*", (request, response) => {
  response.sendFile("index.html", { root: root });
});

app.listen(process.env.PORT || 8081);
