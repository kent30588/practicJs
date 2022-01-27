let chooseBtn = document.querySelector('#choose'),
	receiveBtn = document.querySelector('#receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	text = document.getElementsByName('message')[0];

chooseBtn.addEventListener('mouseenter', () => {
	heading.textContent = 'Действительно все!';
});

chooseBtn.addEventListener('mouseleave', () => {
	heading.textContent = 'Все включено';
});

receiveBtn.addEventListener('click', () => {
	modal.style.display = 'block';
})

document.querySelector('.close').addEventListener('click', () => {
	modal.style.display = 'none';
})


nameInput.addEventListener('input', () => {
	text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `
})
