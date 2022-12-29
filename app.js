const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hi there");
});

app.get("/about", (request, response) => {
	response.send("about there");
});

app.get("/home", (request, response) => {
	response.send("KHUXZAIMA BIN RAMZAN");
});

app.listen(port, () => {
	console.log(`Listen on the port ${port}`);
});
