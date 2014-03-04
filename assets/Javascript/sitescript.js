$("document").ready(function(){
	var setRes;
	var leftPos = 0;
	var link = $("a#hlink")[0];


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

//window.onload = function(){
	setTimeout(start, 2000);	
//}
//});


// var leftPosition = 0;
// var intervalResult;
// var elm = document.getElementById("hlink");

// function startAnimate(){
// 	elm.style.position = "absolute";
// 	elm.style.left = "0px";
// 	elm.style.top = "100px";
	
// 	intervalResult = setInterval(animate,50);
// }

// function animate(){
// 	leftPosition+=5;
// 	elm.style.left = leftPosition +"px";

// 	if(leftPosition>900){

// 		clearInterval(intervalResult);
		
// 		elm.style.position="";
// 		elm.style.left="";
// 		elm.style.top="";
// 	}

// }


// window.onload = function(){
// 	setTimeout(startAnimate, 2000); //call function 5 sec after page is loaded
// }