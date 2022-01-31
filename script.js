let divs = document.getElementsByTagName('div'),
    html = document.getElementsByTagName('html'),
    btnClose = divs[7].getElementsByTagName('button'),
    btnCloseSlider = divs[12].getElementsByClassName('close'),
    slider = divs[0].getElementsByTagName('img'),
    sounds = divs[10].getElementsByTagName('audio'),
    PlaySound = divs[10].getElementsByTagName('img')

console.log(btnClose[0])
console.log(slider)
console.log(divs)

divs[3].onclick = () => {
    divs[7].style.display = "flex"
    divs[8].style.display = "flex"
    html[0].style.overflowY = "hidden"
}
divs[4].onclick = () => {
    divs[7].style.display = "flex"
    divs[9].style.display = "flex"
    html[0].style.overflowY = "hidden"
}
divs[5].onclick = () => {
    divs[7].style.display = "flex"
    divs[10].style.display = "flex"
    html[0].style.overflowY = "hidden"
}
divs[6].onclick = () => {
    divs[7].style.display = "flex"
    divs[11].style.display = "flex"
    html[0].style.overflowY = "hidden"
}
btnClose[0].onclick = () => {
    divs[7].style.display = "none"
    for (let index = 8; index < divs.length; index++) {
        divs[index].style.display = "none"
    }
    for (let index = 0; index < sounds.length; index++) {
        sounds[index].pause();
        sounds[index].currentTime = 0; 
    }
    html[0].style.overflowY = "visible"
}
btnCloseSlider[0].onclick = () => {
    divs[12].style.display = "none"
    html[0].style.overflowY = "visible"
}
slider[0].onclick = () =>
{
    divs[12].style.display = "flex"
    html[0].style.overflowY = "hidden"
}

//slider script

let buttons = document.querySelectorAll(".buttons button");
var imagens = document.querySelectorAll(".links img"),
    idximg = 0;

imagens[0].style.display = "block";

buttons[0].onclick = () => //avança
{
  imagens[idximg].style.display = "none";
  idximg += 1;
  if (idximg > imagens.length-1) {idximg = 0;}
  imagens[idximg].style.display = "block";
}
buttons[1].onclick = () => //voltar
{
  console.log(idximg)
  imagens[idximg].style.display = "none";
  idximg -= 1;
  if (idximg < 0) {idximg = imagens.length-1;}
  console.log(idximg)
  imagens[idximg].style.display = "block";
}


//sound

PlaySound[0].onclick = () =>{
    sounds[0].play();
    sounds[1].pause();
    sounds[1].currentTime = 0;
}
PlaySound[1].onclick = () =>{
    sounds[1].play();
    sounds[0].pause();
    sounds[0].currentTime = 0;
}
