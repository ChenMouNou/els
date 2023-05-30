var paw=document.querySelector('.pw');
var repaw=document.querySelector('.repw');
var etna=document.querySelector('.etn');
etna.onclick=function(){
	if(paw.value.length>=6||repaw.value.length>=6){
		if(paw.value==repaw.value){
			etna.href="index.html";
		}
		else{
			alert("密码不相同");
			etna.href="javascript:;";
		}
	}else{
		etna.href="javascript:;";
		alert("密码不能少于6位");
}
}