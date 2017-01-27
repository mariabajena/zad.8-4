var add = document.getElementById('addElem'),
	list = document.getElementById('Lista')

add.addEventListener('click', function(e) {
  list.innerHTML += '<li>' + 'item ' + document.getElementsByTagName('li').length + '</li>' ;
});