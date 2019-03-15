let modal = document.querySelector('.myModal');
let modalBlock = document.querySelector('.modalImage');
let span = document.querySelector('.close');
let btnDown=document.querySelector('.fas');
let galleryOne= document.querySelector('.gallery1');


// modalBlock.onclick = _ => modal.style.display = 'flex', modal.style.alignItems = 'center', modal.style.flexDirection ='column';

let modalImage = _ => {
    modal.style.display = 'flex'
    modal.style.alignItems = 'center'
    modal.style.flexDirection ='column';
}

span.onclick = _ => modal.style.display = 'none';

let dropDown = _ => {
    if (galleryOne.style.display === 'grid'){
        galleryOne.style.display = 'none';
    } else {
        galleryOne.style.display = 'grid' ;
    }
};

