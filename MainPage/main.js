bgmusic = new Audio('../Sound/bgmusic1.mp3');
setTimeout(() => {
    bgmusic.play();
}, 500);


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
