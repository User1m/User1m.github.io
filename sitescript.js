

	var setRes;
	var link = $('a#hlink');
	var leftPos =0;

	function start(){
		link.style.position = "absolute";
		link.style.left ="0px";
		link.style.top = "250px";

		setRes = setInterval(move, 50);

	}

	function move(){
		leftPos += 5;
		link.style.left = leftPos + "px";

		if(leftPos>1000){
			clearInterval(setRes);

			link.style.position="";
			link.style.left="";
			link.style.top="";
		}

	}
$("document").ready(function(){
	start();
});
