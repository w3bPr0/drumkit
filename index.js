
let keys = document.querySelectorAll('.drum');

for (i=0; i<keys.length; i++) {
keys[i].addEventListener('click', handleClick);
}
function handleClick() {
    let sound = new Audio('sounds/tom-1.mp3');
    sound.play();
    console.log(this);

}