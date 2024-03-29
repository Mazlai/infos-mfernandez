function show_header() {
	document.getElementById('h-content').style.display = 'flex';
	document.getElementById('h-show').style.display = 'none';
	document.getElementById('planet-header').style.display = 'none';
}
function hide_header() {
	document.getElementById('h-content').style.display = '';
	document.getElementById('h-show').style.display = 'block';
	document.getElementById('planet-header').style.display = 'block';
}

function scrollToAnchor(anchorId) {
	const targetElement = document.getElementById(anchorId);
	if (targetElement) {
	  targetElement.scrollIntoView({ behavior: 'smooth' });
	}
}

function scrollToTop() {
	window.scrollTo({top:0, behavior:'smooth'});
}
