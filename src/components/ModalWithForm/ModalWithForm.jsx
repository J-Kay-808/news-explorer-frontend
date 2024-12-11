import "./ModalWithForm.css";

function ModalWithForm({title, children, isOpen, closeModal, onSubmit}) {
  
  const handleSubmit = (e) => {
   e.preventDefault();
   onSubmit();
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={closeModal}></button>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;