	var setRes;
	var link = document.getElementById("hlink");
	var leftPos = 0;

	function start() {
		link.style.position = "absolute";
		link.style.left ="0px";
		link.style.top = "50px";

		setRes = setInterval(move, 50);

	}

	function move() {
		leftPos+=2;
		link.style.left=leftPos+"px";

		if(leftPos>1000) {
			clearInterval(setRes);
			link.style.position="";
			link.style.left="";
			link.style.top="";
		}

	}
	
$("document").ready(function(){
	start();
});
