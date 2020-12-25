//footer? I hardly know her

console.log("Footer? I hardly know her");

var container = document.createElement("div");
container.className = "SI_FEET_STUFF";
container.innerHTML =
	"<div class='SI_FEET_THUMB_NAIL'></div>" +
	"<h1 class='SI_FEET_BIG_TOE'>Made with $ by <a target='__blank' href='https://schitte.github.io'>Schitte Industries</a></h1>" +
	"<h1 class='SI_FEET_PINKY_TOE'><a target='__blank' href='https://www.patreon.com/schitte'>Please Feed Us</a></h1>"

;

document.addEventListener('DOMContentLoaded', function () {
	document.body.appendChild(container);
});
