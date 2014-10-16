// IEF + mode stricte.
(function () {
	'use strict';
	/*
	 * Script permettant d'ouvrir et de fermer le menu déroulant more
	 * lors du clic.
	 */
	var openSubMenuActions = document.querySelector('.listActions-link--more');
	var subMenuActions = document.querySelector('.listActionsSub');

	openSubMenuActions.addEventListener('click', function (e) {
		subMenuActions.classList.toggle('listActionsSub--show');
		e.preventDefault(); // Empêcher la redirection.
	});

	/*
	 * Script permettant d'ouvrir et de fermer la zone contenant
	 * les réponses au tweet principal lors du clic.
	 */
	var openAnswerTweetWrapper = document.querySelector('.listActions-link--showComment');
	var answerTweetWrapper =  document.querySelector('.answers');

	openAnswerTweetWrapper.addEventListener('click', function (e) {
		answerTweetWrapper.classList.toggle('answers--show');
		e.preventDefault(); // Empêcher la redirection.
	})
}());