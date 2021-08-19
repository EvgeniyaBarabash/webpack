import refs from './refs.js';

const {list,modal,overlay,modalContent,modalImg,closeModalBtn,image} =refs;



export default list.addEventListener('click', openModalCickImage);
function openModalCickImage(e){
    if (e.target.nodeName === 'IMG') {
        modal.classList.add('is-open');
        modalImg.src = e.target.src;
        modalImg.dataset.index = e.target.dataset.index;
      }
      carousel();
      closeModal();
};

