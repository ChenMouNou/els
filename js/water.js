var pic=document.querySelector('.gif')
document.addEventListener('mousemove',function(e){
	var x=e.pageX;
	var y=e.pageY;
	pic.style.left=x +10 +'px';
	pic.style.top=y -20 +'px';
});

function l() {
	var d = document.getElementsByClassName('person');
	// var d=i.querySelectorAll('span');
	for (var i = 0; i < d.length; i++) {
		d[i].style.cursor = "pointer";
	}
}

function op() {
	var i = document.querySelector('.p');
	var o = document.querySelector('.o');
	if (i.style.index == 1) {
		i.onclick = function() {
			o.href = "./css/color.css";
			i.style.index = 0;
		}
	} else {
		i.onclick = function() {
			o.href = "./css/index.css";
			i.style.index = 1;
		}
	}
}

var nav=document.getElementsByClassName('navimgms');
var pos=0;