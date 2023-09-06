function show_header() {
	document.getElementById('h-content').style.display = 'flex';
	document.getElementById('h-show').style.display = 'none';
}
function hide_header() {
	document.getElementById('h-content').style.display = '';
	document.getElementById('h-show').style.display = 'block';
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
