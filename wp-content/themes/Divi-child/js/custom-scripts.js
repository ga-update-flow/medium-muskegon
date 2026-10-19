// Custom scripts for the search box
const searchClose = document.getElementById('search__close');
const searchButton = document.getElementById('search__button');

searchClose.addEventListener('click', () => {
	const searchBar = document.getElementById('search__bar');
	searchBar.classList.remove('visible');
    searchBar.classList.add('hidden');
});	


searchButton.addEventListener('click', function() {
	const searchBar = document.getElementById('search__bar');
	searchBar.classList.remove('hidden');
	searchBar.classList.add('visible');
	searchBar.querySelector('input').focus();
}); 


const footnoteLinks = document.querySelectorAll('.note');
if (footnoteLinks.length > 0) {
	footnoteLinks.forEach(footnoteLink => {
		footnoteLink.addEventListener("click", (event) => {
			event.preventDefault();
			const noteId = event.currentTarget.dataset.noteid;
			const footnote = document.querySelector(`div #${noteId}`);
			footnote.classList.toggle("visible");
		});
	});
}

