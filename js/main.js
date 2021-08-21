$(document).ready(() => {
	$('#full-name').keypress((event) => {
		var number = parseInt(event.key);
		if (!isNaN(number)) {
			event.preventDefault();
		}
	});

	$('#username').keypress((event) => {
		if (event.key === '.' || event.key === ',') {
			event.preventDefault();
		}
	});

	$('#agree').on('click', function () {
		if ($('#agree').prop('checked') === true) {
			console.log('Согласен');
		} else {
			console.log('Не согласен');
		}
	});

	$('#main-button').on('click', function () {
		if ($('#full-name').val() === '') {
			alert('Заполните поле Full Name');
			return false;
		} else if ($('#username').val() === '') {
			alert('Заполните поле Your Username');
			return false;
		} else if ($('#e-mail').val() === '') {
			alert('Заполните поле E-mail');
			return false;
		} else if ($('#password').val() === '') {
			alert('Заполните поле Password');
			return false;
		} else if ($('#repeat-password').val() === '') {
			alert('Заполните поле Repeat Password');
			return false;
		} else if ($('#password').val() !== $('#repeat-password').val()) {
			alert('Пароли не совпадают');
			return false;
		} else if ($('#agree').prop('checked') === false) {
			alert('Чекбокс не выбран');
			return false;
		} else {
			alert('OKAY')
			return true;
		}
	});

	$('#main-login').on('click', function () {
		var removedItem = $('.main-form-item');
		removedItem[0].remove();
		removedItem[2].remove();
		removedItem[4].remove();

		var title = $('#main-info-title');
		title.text('Log in to the system');

		$('#main-checkbox').remove();

		var buttonText = $('#btn');
		buttonText.text('Sign In');

		$('#main-login').remove();
	});
});