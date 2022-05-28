var openModalButton = document.querySelector('.modal-button-1');
var modalBg = document.querySelector('.modal-bg');
var closeModalButton = document.querySelector('.modal-button');
closeModalButton.addEventListener('click', closeModal);
openModalButton.addEventListener('click', openModal);
function openModal(event) {
  modalBg.classList.add('modal-bg-on');
}
function closeModal(event) {
  modalBg.classList.remove('modal-bg-on');

}
