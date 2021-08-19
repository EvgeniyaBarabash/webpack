import refs from './refs.js';

const {list,modal,overlay,modalContent,modalImg,closeModalBtn,image} =refs;
window.addEventListener('keydown', closeOnEscape);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeOnOverlay);
export function closeOnEscape(e) {
  console.log("Escape");
  if (e.code === "Escape") {
    closeModal();
  }
}

export function closeOnOverlay(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    closeModal();
  }
}
export function closeModal() {
  modal.classList.remove("is-open");
}

// function refresh() {
//     window.removeEventListener('keydown',closeOnEscape);
//     modal.removeEventListener('click', closeOnOverlay);
//   }
