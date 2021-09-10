score = 0;
cross = true;

bgmusic = new Audio('../Sound/bgmusic.mp3');
jump = new Audio('../Sound/jump.mp3');
game = new Audio('../Sound/gameover.mp3');


setTimeout(() => {
    bgmusic.play();
}, 1000);

document.onkeydown = function(e){
    console.log("Key code is " , e.keyCode)
    if(e.keyCode==38){
        jump.play();
       // bgmusic.play();
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
        

       setTimeout(() => {
        mario.classList.remove('animateMario')
       }, 700);
    }

    if(e.keyCode==39){
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = marioX + 112 +"px";
    }

    if(e.keyCode==37){
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = marioX - 112 +"px";
    }
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameOver = document.querySelector('.gameOver');
    huddle = document.querySelector('.huddle');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    hx = parseInt(window.getComputedStyle(huddle, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(huddle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx-hx);
    offsetY = Math.abs(my-hy);

    if(offsetX < 30 && offsetY <45){
        gameOver.style.visibility = 'visible';
        huddle.classList.remove('huddleAnimation')
        game.play()
        setTimeout(() => {
           bgmusic.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            animationDurr = parseFloat(window.getComputedStyle(huddle, null).getPropertyValue('animation-duration'));
            newDur = animationDurr -0.1;
            huddle.style.animationDuration = newDur +'s';
        }, 1500);
        
    }
},10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score
}



