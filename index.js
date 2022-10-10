import '@popperjs/core';
import Modal from 'bootstrap/js/dist/modal';

const confirmModal = new Modal(document.getElementById('staticBackdrop'), {});

confirmModal.show()