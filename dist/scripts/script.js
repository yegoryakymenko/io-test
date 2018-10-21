window.onload = function (e) {
	var email = document.getElementById('email'),
		password = document.getElementById('password'),
		emailWindow = document.querySelector('.email'),
		passwordWindow = document.querySelector('.password'),
		reg = /^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
		
	// Email
	email.onblur = function() {
		if(reg.test(email.value) == false) {
			email.classList.add('error-line');
			email.classList.add('shake');
			emailWindow.classList.add('active');
		} else {
			email.classList.remove('error-line');
			email.classList.add('verified-line');
			emailWindow.classList.remove('active');

		}
			email.onfocus = function() {
		if(email.classList.contains("shake")) {
			email.classList.remove('shake');

		}
	}
	}
	// Password
	password.onblur = function() {
		if(password.value.length < 8) {
			password.classList.add('error-line');
			password.classList.add('shake');
			passwordWindow.classList.add('active');

		} else {
			password.classList.remove('error-line');
			password.classList.add('verified-line');
			passwordWindow.classList.remove('active');
		}
	}
	password.onfocus = function() {
		if(password.classList.contains("shake")) {
			password.classList.remove('shake');

		}
	}
} 