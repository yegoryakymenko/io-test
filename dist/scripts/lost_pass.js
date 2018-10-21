window.onload = function (e) {
	var email = document.getElementById('email'),
		emailWindow = document.querySelector('.email'),
		reg = /^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
		
	// Email
	email.onblur = function() {
		if(reg.test(email.value) == false) {
			email.classList.add('error-line');
			email.classList.add('shake');
			emailWindow.classList.add('active');
		} else {
			email.classList.remove('error-line');

			emailWindow.classList.remove('active');

		}
			email.onfocus = function() {
		if(email.classList.contains("shake")) {
			email.classList.remove('shake');

		}
	}
	}
} 