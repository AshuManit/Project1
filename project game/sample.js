
score=0;   // intial value of score
cross=true;  // 
audio = new Audio('gocorona.mp3');  //adding cover song
audiogo = new Audio('stop.wav');   // adding stop song
setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown = function(e){ 
    console.log("key code is :", e.keyCode)
    if(e.keyCode==38){      // for upper
        human = document.querySelector('.human');   //accessing human class
        human.classList.add('animateHuman');     //Adding a class for animate human
        
        setTimeout(()=> {
            human.classList.remove('animateHuman');
        },700);
      }
      if(e.keyCode==39){
        human = document.querySelector('.human');   //accessing human class
        humanX=   parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));  
        human.style.left = humanX+40+"px"; 
        console.log(humanx);
      }
      console.log(e.keycode);
      if(e.keyCode==37){
        human = document.querySelector('.human');   //accessing human class
        humanX=   parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));  
        human.style.left= humanX-40+"px"; 
      }
      
    }


setInterval(() => {
    human = document.querySelector(".human");    // accessing  human class
    gameover = document.querySelector(".gameOver");  // accessing  gameOver class
    obstacle = document.querySelector(".obstacle"); // accessing  obstacle class

    hx = parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(human,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX =  Math.abs(hx-ox);
    offsetY =  Math.abs(hy-oy);

    console.log(offsetX,offsetY);
    if(offsetX<90 && offsetY<85 ){
      
    scoreContainer.innerHTML = "Score <br>"+score;
    gameover.style.visibility="visible";   //this will visibel gameOver content
    human.classList.remove('human');
    obstacle.classList.remove('obstacle');
    audiogo.play();
    audio.pause();
    setTimeout(() =>{
        audiogo.pause();
        
     },1000);

    }
    else if(offsetX<130 && cross){
        score++;
        updateScore(score);
        cross=false;
        setTimeout(() =>{
            cross=true; 
        },1000);
        setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur+'s'; 
      },500);  
    }
    
    function updateScore(score){
        scoreContainer.innerHTML = "Score <br>"+score;
    }
},100);