let modal = document.querySelector('.myModal');
let modalText = document.querySelector('.myModal .caption p');
let modalBlock = document.querySelector('.myModal .modal-content');
let span = document.querySelector('.close');
let btnDown=document.querySelectorAll('.fas');
let galleryOne= document.querySelector('.gallery1');
let galleryTwo= document.querySelector('.gallery2');
let galleryThree= document.querySelector('.gallery3');
let downModule = document.querySelector('.downModule');
let downModule2 = document.querySelector('.downModule2');
let downModule3 = document.querySelector('.downModule3');


// modalBlock.onclick = _ => modal.style.display = 'flex', modal.style.alignItems = 'center', modal.style.flexDirection ='column';

/*let modalImage = (event) => {
    console.log(event);
    modal.style.display = 'flex'
    modal.style.alignItems = 'center'
    modal.style.flexDirection ='column';*/

let modalImage = (event) => {
    console.log(event);
    modal.style.display = 'flex'
    modal.style.alignItems = 'center'
    modal.style.flexDirection ='column';
    modal.overflow='hidden'
    const title = event.path[0].attributes[1].value;
    modalText.innerHTML = title;
    const image = event.path[0].currentSrc;
    modalBlock.setAttribute('src', image);
    
//const image = document.getElementsByClassName('.modalImage').src
}// get elementbyclass name

span.onclick = _ => modal.style.display = 'none';

let dropDown = _ => {
    if (galleryOne.style.display === 'grid'){
        galleryOne.style.display = 'none';
        downModule.classList.add('rotate');
    } else {
        galleryOne.style.display = 'grid';
        downModule.classList.remove('rotate');

    }
};

let dropDown2 = _ => {
    if (galleryTwo.style.display === 'grid'){
        galleryTwo.style.display = 'none';
        downModule2.classList.add('rotate');
    } else {
        galleryTwo.style.display = 'grid';
        downModule2.classList.remove('rotate');

    }
};


let dropDown3 = _ => {
    if (galleryThree.style.display === 'grid'){
        galleryThree.style.display = 'none';
        downModule3.classList.add('rotate');
    } else {
        galleryThree.style.display = 'grid';
        downModule3.classList.remove('rotate');

    }
};