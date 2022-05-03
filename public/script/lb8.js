// Data for pages preview
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


function tblee(){
    let indx = owlData.length - 1
    // gettin table link
    let tableRef = document.getElementById('testtt')

    // Creating new row
    let newRow = tableRef.insertRow(-1);

    let cell =  newRow.insertCell(0);
    let newText = document.createTextNode(owlData[indx].name);
    cell.appendChild(newText);

    cell =  newRow.insertCell(1);
    newText = document.createTextNode(owlData[indx].sc_name);
    cell.appendChild(newText);


    cell =  newRow.insertCell(2);
    newText = document.createTextNode(owlData[indx].mass);
    cell.appendChild(newText);


    cell =  newRow.insertCell(3);
    newText = document.createTextNode(owlData[indx].height);
    cell.appendChild(newText);


}


function addInfo(){
    let owll = {
        name : document.getElementById('owl_name').value,
        sc_name : document.getElementById('sc_name').value,
        mass : document.getElementById('mass').value, 
        height : document.getElementById('height').value
    }
    
    owlData.push(owll)


    tblee();
}