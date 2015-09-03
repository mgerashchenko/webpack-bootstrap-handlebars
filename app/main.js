require("bootstrap-sass-loader");
require("bootstrap-webpack");

require("./style.scss");
var content = require("./content.js");

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = content();
	document.body.appendChild(div);
});