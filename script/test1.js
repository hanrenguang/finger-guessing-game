var count = 0;

window.onload = function(){
	var imgs = document.querySelector(".box").getElementsByTagName("img");
	var winText = document.querySelector(".win-times");
	var win = document.querySelector(".win");
	var lose = document.querySelector(".lose");
	var again = document.getElementsByTagName("button");
	var tie = document.querySelector(".tie");

	for(var i = 0;i < 3;i++){
		imgs[i].onclick = (function(m){return function(){
			console.log(m);
			var result = null;
			var computer = Math.floor(10 * Math.random()) % 3;
			for(var j = 0;j < 3;j++){
				imgs[j].style.display = "none";
			}
			imgs[computer].style.display = "block";
			result = judge(m,computer);
			switch(result){
				case 0:
					imgs[computer].className = "computer";
					lose.style.display = "block";
					createImg(m);
					break;
				case 1:
					imgs[computer].className = "computer";
					tie.style.display = "block";
					createImg(m);
					break;
				default:
					imgs[computer].className = "computer";
					win.style.display = "block";
					count++;
					winText.innerHTML = count;
					createImg(m);
					break;
			};
		}})(i);
	}

	again[0].onclick = function(){
		win.style.display = "none";
		lose.style.display = "none";
		tie.style.display = "none";
		document.body.removeChild(document.body.lastChild);

		for(var k = 0;k < 3;k++){
			imgs[k].className = "default";
			imgs[k].style.display = "inline-block";
		}
	};
};

function judge(me,computer){
	if(me == 0){
		if(computer == 1){
			return 2;
		}else if(computer == 0){
			return 1;
		}else{
			return 0;
		}
	}else if(me == 1){
		if(computer == 1){
			return 1;
		}else if(computer == 0){
			return 0;
		}else{
			return 2;
		}
	}else{
		if(computer == 1){
			return 0;
		}else if(computer == 0){
			return 2;
		}else{
			return 1;
		}
	}
}

function createImg(num){
	var image = document.createElement("img");
	image.className = "yourself";
	if(num == 0){
		image.src = "images/" + num + num + ".png";
	}else if(num == 1){
		image.src = "images/" + 2 + 2 + ".png";
	}else{
		image.src = "images/" + 5 + 5 + ".png";
	}
	document.body.appendChild(image);
}