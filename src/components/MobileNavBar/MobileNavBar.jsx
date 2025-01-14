import "./MobileNavBar.css";

function MobileNavBar({
  isOpen,
  closeModal,
  handleLoginClick,
  handleHomeClick,
}) {
  return (
    <div className={`mobile-menu ${isOpen} ? "mobile-menu_opened": ""`}>
      <div className="mobile-menu__header">
        <h2 className="mobile-menu__title">News Explorer</h2>
        <button
          className="mobile-menu__close-button"
          onClick={closeModal}
        ></button>
      </div>
      <button
        className="mobile-menu__home-button"
        onClick={() => {
          handleHomeClick();
          closeModal();
        }}
      >
        Home
      </button>
      <button
        className="mobile-menu__sign-in-button"
        onClick={() => {
          handleLoginClick();
        }}
      >
        Sign in
      </button>
    </div>
  );
}

export default MobileNavBar;