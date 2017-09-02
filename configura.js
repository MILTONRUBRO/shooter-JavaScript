var barAlt, barLarg, jogPosX, velocJog, bolaDiam, bolaPosX, bolaPosY, velocBola, pontosJog, colisao;

function gameLoop(){
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(jogPosX, canvas.height - barAlt, barLarg, barAlt);
	
	if(bolaPosY <= canvas.height){
		bolaPosY += velocBola;
	}else{
		bolaPosX = Math.random() * 600;
		bolaPosY = -10;
		colisao = false;
	}
	
	
	context.beginPath();
	context.arc(bolaPosX, bolaPosY, bolaDiam, 0, Math.PI * 2, true);
	context.fill();
	
	if((bolaPosX > jogPosX && bolaPosX < jogPosX + barLarg)&& (bolaPosY >= canvas.height - barAlt && colisao == false)){
		pontosJog++;
		colisao = true;
	}
	
	context.font = "32pt Tahoma";
	context.fillText(pontosJog, canvas.width - 70, 50);
}


function inicializar(){

	barAlt = 15;
	barLarg = 90;
	jogPosX = (canvas.width - barLarg)/2;
	velocJog = 20;
	
	bolaDiam = 10;
	bolaPosX = canvas.width/2;
	bolaPosY =  10;
	velocBola = 15;
	
	pontosJog = 0;
	colisao = false;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	//context.fillRect(jogPosX, canvas.height - barAlt, barLarg, barAlt);
	
	
	
	document.addEventListener('keydown', keydown);
	
	setInterval(gameLoop, 30);
	
}

function keydown(e){
	
	if(e.keyCode == 37 || e.keyCode == 100){
		
		if(jogPosX > 0){
			jogPosX -= velocJog;
		
		}
	}
	if(e.keyCode == 39 || e.keyCode == 102){
		
		if(jogPosX < (canvas.width - barLarg)){
		jogPosX += velocJog;
		}
	}
	
	context.fillRect(jogPosX, canvas.height - barAlt, barLarg, barAlt);
	
}

