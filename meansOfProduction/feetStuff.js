//footer? I hardly know her

console.log("Footer? I hardly know her");

var container = document.createElement("div");
container.className = "SI_FEET_STUFF";
container.innerHTML =
	"<div class='SI_FEET_THUMB_NAIL'></div>" +
	"<h1 class='SI_FEET_BIG_TOE'>Made with $ by Schitte Industries</h1>"
;

document.addEventListener('DOMContentLoaded', function () {
	document.body.appendChild(container);
});
