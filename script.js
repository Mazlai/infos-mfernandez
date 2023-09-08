function show_header() {
	document.getElementById('h-content').style.display = 'flex';
	document.getElementById('h-show').style.display = 'none';
	document.getElementById('planet-header').style.display = 'none';
}
function hide_header() {
	document.getElementById('h-content').style.display = '';
	document.getElementById('h-show').style.display = 'block';
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

/*function send_mail(params) {
	var tempParams = {
		from_name:document.getElementById('from-name').value,
		user_email:document.getElementById('user-email').value,
		subject:document.getElementById('subject').value,
		message:document.getElementById('last-champ').value,
	};

	emailjs.send('mickygmail', 'template_ap9wgeq', tempParams)
	.then(function(response) {
		console.log("Success", response.status);
	})
}*/
