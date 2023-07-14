score=0;
cross=true; 
audio=new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(()=>{
   audio.play();
},1000)
document.onkeydown=function(e){
    console.log('pressed keyCode is:',e.key);
    if(e.key=='ArrowUp'){
        // console.log('get the uparrow value::::');
       let dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
                 dino.classList.remove('animateDino');
        },700)
    }
    if(e.key=='ArrowRight'){
       let dino=document.querySelector('.dino');
       let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left=(dinoX + 112)+"px";
       console.log("dinox")
    }
    if(e.key=='ArrowLeft'){
        let dino=document.querySelector('.dino');
        let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px"
    }
}
setInterval(()=>{
       let dino=document.querySelector('.dino');
       let game_over=document.querySelector('.game_over');
       let obstacle=document.querySelector('.obstacle');

       let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    //    console.log(dx,dy);

       let ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
       let oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    //    console.log(ox,oy);

       offsetX=Math.abs(dx-ox);
       offsetY=Math.abs(dy-oy);
    //    console.log(offsetX,offsetY)

       if( offsetX<100 && offsetY<80){
        game_over.style.visibility='visible';
        console.log("collide");
        obstacle.classList.remove('obstacleAni');
         audiogo.play();
         setTimeout(()=>{
            audiogo.pause();
         },1000)
    }else {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
        }
    },100);

    function updateScore(score) {
        scoreCount.innerHTML = "Your Score: " + score
    }