let names = [
	"Pa Dadang",
	"Pa Asep",
	"Pa Umar",
	"Pa Nandang",
];

count = names.length;

function start() {
    selected = names[(Math.random() * count) | 0].toUpperCase();
    covered = selected.replace(/[^\s]/g, "_");
	document.getElementById('names').innerHTML = covered;
	timer = setInterval(decode, 50);
}

function decode() {
	newtext = covered.split("").map(changeLetter()).join("");
	document.getElementById('names').innerHTML = newtext;
	if (selected == covered) {
		clearTimeout(timer);
		winnerRevealed();
		return false;
	}
	covered = newtext;
}

function changeLetter() {
	replacements =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz%!@&*#_ ";
	replacementsLen = replacements.length;
	return function (letter, index, err) {
		return selected[index] == letter
			? letter
			: replacements[(Math.random() * replacementsLen) | 0];
	};
}
