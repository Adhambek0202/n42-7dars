var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elMessage = document.querySelector('.js-message');
var elFoot = document.querySelector('.js-foot');
var elByc = document.querySelector('.js-bicycle');
var elCar = document.querySelector('.js-car');
var elPlane = document.querySelector('.js-plane');

var FOOT_SPEED = 3.6;
var BYC_SPEED = 20.1;
var CAR_SPEED = 70;
var PLANE_SPEED = 800;

function checkSpeed(masofa, tezlik) {
	var soat = Math.floor(masofa / tezlik);

	var minut = Math.floor((masofa / tezlik - soat) * 60);

	var sekund = Math.floor(((masofa / tezlik - soat) * 60 - minut) * 60);

	if (soat == 0) {
		return `minut:${minut} sekund:${sekund}`;
	} else if (minut == 0) {
		return `Soat:${soat} sekund:${sekund}`;
	}else if (sekund == 0) {
    return `Soat:${soat} minut:${minut}`;
	} else {
		return `Soat:${soat} minut:${minut} sekund:${sekund}`;
	}
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	var elInputVal = +elInput.value;
  elInput.value = "";

	if (elInputVal <= 0 || isNaN(elInputVal)) {
		elMessage.style.color = 'red';
		elMessage.textContent = 'Harf ishlatmang va 0 dan katta son kiriting!!!';

		return;
	}else {
    elMessage.style.color = 'green';
		elMessage.textContent = '';
  }

	elFoot.textContent = checkSpeed(elInputVal, FOOT_SPEED);
	elByc.textContent = checkSpeed(elInputVal, BYC_SPEED);
	elCar.textContent = checkSpeed(elInputVal, CAR_SPEED);
	elPlane.textContent = checkSpeed(elInputVal, PLANE_SPEED);

});
