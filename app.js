require("./index.js");
const sleep = require("http");

/* Prevent Sleep in Heroku Server */
setInterval(function () {
	sleep.get("http://yachoo.herokuapp.com");
}, 600000); // every 10 minutes
