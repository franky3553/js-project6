// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// open modal event: when user clicks modal-btn add .open-modal to modal-overlay
// close modal event when user clicks close-btn remove .open-modal from modal-overlay

// selections
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// btn open and close modal event
// open modal event
modalBtn.addEventListener('click', function(){
   modalOverlay.classList.add('open-modal')
});
// close modal event
closeBtn.addEventListener('click', function(){
   modalOverlay.classList.remove('open-modal')
});