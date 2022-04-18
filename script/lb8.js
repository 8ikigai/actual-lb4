const owls = [
    {
        owl: 'Barn owl',
        info: ' The barn owl (Tyto alba) is the most widely distributed species of owl in the world and one of the most widespread of all species of birds.'
    },
    {
        owl: 'Eurasian eagle-owl',
        info: 'The Eurasian eagle-owl (Bubo bubo) is a species of eagle-owl that resides in much of Eurasia. It is also called the Uhu and it is occasionally'+
        ' abbreviated to just the eagle-owl in Europe. '
    },
    {
        owl: 'Tawny owl',
        info: 'The tawny owl (also called the brown owl) (Strix aluco) is commonly found in woodlands across much of Eurasia and North Africa, and has 11 recognized subspecies.'
    },
    {
        owl: 'Rufous fishing owl',
        info: 'The rufous fishing owl is a large owl with dark eyes, which lacks ear tufts and has an indistinct, pale cinnamon facial disc and underparts.'
    }
]

function show2(ind){
    document.getElementById('preview').innerText = owls[ind].owl + '. \n ' + owls[ind].info;
}

function showPreview(){
    document.getElementById('preview').innerText = owls[0].owl + '. \n ' + owls[0].info;

    
    setTimeout(show2, 9000, 3)
    setTimeout(show2, 6000, 2)
    setTimeout(show2, 3000, 1)


    
}


function adClose(){
    document.getElementById('popup-ad').style.visibility = 'hidden'

    document.getElementById('popup-ad').style.opacity = 0;
    setTimeout(adOpen, 6000);
}

function adOpen(){
    document.getElementById('popup-ad').style.visibility = 'visible';
    document.getElementById('popup-ad').style.opacity = 1;
}

// class Owl{
//     #fname;
//     #scnt_name;
//     #mass;
//     #height;
//     constructor(fname, scntfc_name, mass, height){
//         this.#fname = fname;
//         this.#height = height;
//         this.#mass = mass;
//         this.scntfc_name = scntfc_name;
//     }
// }
// class tblData{
//     wholeData;
//     headerCells;
//     constructor(fname, scntfc_name, mass, height){
//         this.headerCells = []
//         this.headerCells.push(fname, scntfc_name, mass, height)
//     }
// }

function tblee(owls){
    alert('helooooo')
    // creating row
    let row = document.createElement('tr')

    //gettin row length
    let k = 4
    cell =  document.createElement('td');
    cell.innerText=owlss[0].name
    row.appendChild(cell)
    cell =  document.createElement('td');
    cell.innerText=owlss[0].sc_name
    row.appendChild(cell)
    cell =  document.createElement('td');
    cell.innerText=owlss[0].mass
    row.appendChild(cell)
    cell =  document.createElement('td');
    cell.innerText=owlss[0].height
    row.appendChild(cell)
    document.getElementById('test').appendChild(row)
}

function addInfo(owls){
    let owl = {
        name : document.getElementById('owl_name').value,
        sc_name : document.getElementById('sc_name').value,
        mass : document.getElementById('mass').value, 
        height : document.getElementById('height').value
    }
    owls.push(owl)
    
    alert(owls[0].name)
}