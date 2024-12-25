import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({isOpen, closeModal, navigateToSignUp, handleLoginSubmit}) {
    return(
        <ModalWithForm title="Sign in"
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit = {handleLoginSubmit} >
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
          <button type="submit" className="modal__sign-in-button">Sign in</button>
          <div className="modal__alt-button">
            <p>or</p>
            <button type="button" to="register" className="modal__sign-up-button" onClick={navigateToSignUp}>Sign up</button>
          </div>
        
        </ModalWithForm>
        
    )
}

export default LoginModal;