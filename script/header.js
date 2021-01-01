function headerIcon(x){
	x.classList.toggle('xIcon')
}

function headerMenu(){
	var x = document.getElementById('header-menu');
	if (x.className == 'menu') {
		x.className += ' openMenu';
	} else {
		x.className = 'menu';
	}
}