(function () {
	'use strict';
	var openSubMenuActions = document.querySelector('.listActions-link--more');
	var subMenuActions = document.querySelector('.listActionsSub');

	openSubMenuActions.addEventListener('click', function (e) {
		subMenuActions.classList.toggle('listActionsSub--show');
		e.preventDefault();
	});
}());