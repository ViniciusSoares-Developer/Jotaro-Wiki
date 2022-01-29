let divs = document.getElementsByTagName('div'),
    html = document.getElementsByTagName('html'),
    btnClose = divs[7].getElementsByTagName('button')

divs[3].onclick = () => {
    divs[7].style.display = "flex"
    divs[8].style.display = "block"
    html[0].style.overflowY = "hidden"
}
divs[4].onclick = () => {
    divs[7].style.display = "flex"
    divs[9].style.display = "block"
    html[0].style.overflowY = "hidden"
}
divs[5].onclick = () => {
    divs[7].style.display = "flex"
    divs[10].style.display = "block"
    html[0].style.overflowY = "hidden"
}
divs[6].onclick = () => {
    divs[7].style.display = "flex"
    //divs[11].style.display = "block"
    html[0].style.overflowY = "hidden"
}
btnClose[0].onclick = () => {
    divs[7].style.display = "none"
    for (let index = 8; index < divs.length; index++) {
        divs[index].style.display = "none"
    }
    html[0].style.overflowY = "visible"
}