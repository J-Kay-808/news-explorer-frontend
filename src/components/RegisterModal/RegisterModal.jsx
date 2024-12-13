import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({isOpen, closeModal, navigateToLogin, handleSignUp }) {
    return(
        <ModalWithForm title="Sign up"
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={handleSignUp} >
            <label htmlFor="email" className="modal__label">
            Email
            <input
              type="email"
              className="modal__input"
              id="email"
              required
              placeholder="example@test.com"
              name="email"
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">Password
            <input
              type="text"
              className="modal__input"
              id="password"
              required
              name="password"
              placeholder="••••••••"
            ></input>
          </label>
          <label htmlFor="username" className="modal__label">
            Username
            <input
              type="name"
              className="modal__input"
              id="name"
              required
              placeholder="Enter your username"
              name="username"
            ></input>
          </label>
          <button type="submit" className="modal__sign-in-button">Sign up</button>
          <div className="modal__alt-button">
            <p>or</p>
            <button type="button" to="login" className="modal__sign-up-button" onClick={navigateToLogin}>Sign in</button>
          </div>
        
        </ModalWithForm>
        
    )
}

export default RegisterModal;