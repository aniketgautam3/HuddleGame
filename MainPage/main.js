bgmusic = new Audio('../Sound/jump.mp3');
setTimeout(() => {
    bgmusic.play();
}, 10);


function myFunction(){
    control = document.querySelector('.control');
    control.style.visibility = 'visible';
    
    setTimeout((myFunction) => {
            control = document.querySelector('.control');
            control.style.visibility = 'hidden';
    }, 1000);
}


// // function myFunction() {
//     document.getElementById("control").innerHTML = "Hello World";
// }
