// function change_color(id){
//     let r = Math.random()*(255);
//     let g = Math.random()*(255);
//     let b = Math.random()*(255);
//     var el = document.getElementById(id);
//     el.style.background =  rgb(r, g , b)
// }
function change_color(id){
    let r = Math.random()*(255);
    let g = Math.random()*(255);
    let b = Math.random()*(255);
    let color = 'rgb(' + r +', ' +g + ', ' +b + ')'
    document.getElementById(id).style.background =  'linear-gradient(0.5turn, #D3FBD8, '+color+')';
}

function rand_link(arrOBJ){
    lnkIndx = Math.round(Math.random()*(3));
    lnk= '<a id="' + arrOBJ[lnkIndx].style + '" href="' + arrOBJ[lnkIndx].link + '">' + arrOBJ[lnkIndx].title + '</a>';
    return lnk
}

var arrObjects = [];
                    
    
arrObjects[0] = {
    link: "barn.html",
    style: "a0",
    title: "barn"
}
arrObjects[1] = {
    link: "eurasian_eagle.html",
    style: "a1",
    title: "eurasian"
}
arrObjects[2] = {
    link: "tawny.html",
    style: "a2",
    title: "tawny"
}
arrObjects[3] = {
    link: "rufous.html",
    style: "a3",
    title: "rufous"
}
a_html= rand_link(arrObjects);
document.write(a_html)