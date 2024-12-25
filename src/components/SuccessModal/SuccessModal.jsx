import "./SuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessModal({ isOpen, closeModal, navigateToLogin }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <button className="success-modal__sign-in" onClick={navigateToLogin}>
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SuccessModal;