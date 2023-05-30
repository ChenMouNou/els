window.onload = function() {
	var n = 0;
	var ban = document.querySelector('.imgbox');
	var l = document.querySelector('.l');
	var r = document.querySelector('.r');
	l.onclick = function() {
		if (n > -3200) {
			n = n-640;
			ban.style.marginLeft = n + 'px';
		} else {
			n = 0;
			ban.style.marginLeft = n + 'px';
		}
	}
	r.onclick= function() {
		if (n < 0) {
			n =n+640;
			ban.style.marginLeft = n + 'px';
		} else {
			n =-2560;
			ban.style.marginLeft = n + 'px';
		}
	}
}
