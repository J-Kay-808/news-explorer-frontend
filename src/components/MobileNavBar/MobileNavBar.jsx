import "./MobileNavBar.css";
import { useLocation } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";
import menuIcon from "../../assets/menuIcon.svg";
import menuIconBlack from "../../assets/menuIconBlack.svg";
import { Link } from "react-router-dom";


function MobileNavBar({
  isOpen,
  closeModal,
  handleLoginClick,
  handleHomeClick,
  isLoggedIn,
  handleSavedArticlesClick,
  handleLogOut,

}) {
  const location = useLocation();

  return (
    <div className={`mobile ${isOpen} ? "mobile_opened": ""`}>
      <div className="mobile__header">
        <h2 className="mobile__title">News Explorer</h2>
        <button
          className="mobile__close-button"
          onClick={closeModal}
        ></button>
      </div>

      <ul className="mobile__list">
        <li className="mobile__links">
          <button
            className={`mobile__link mobile__home-button ${location.pathname === "/" ? "mobile__link mobile__home--active" : ""
              }`}
            onClick={handleHomeClick}
          >
            Home
          </button>
        </li>
        {isLoggedIn ? (
          <>
            <li className="mobile__links">
              <button
                className={`mobile__link mobile__saved-articles-button ${location.pathname === "/saved-news"
                  ? "mobile__link mobile__saved-articles--active"
                  : ""
                  }`}
                onClick={handleSavedArticlesClick}
              >
                Saved articles
              </button>
            </li>
            <li className="mobile__links">
              <button
                className="mobile__link mobile_logout-button"
                onClick={handleLogOut}
              >
                Elise
                <img
                  className="mobile__logout-icon"
                  alt="Logout"
                  src={location.pathname === "/" ? logoutIcon : altIcon}
                />
              </button>
            </li>
          </>
        ) : (
          <button
            className="mobile__link mobile__sign-in-button"
            onClick={handleLoginClick}
          >
            Sign In
          </button>

        )}
      </ul>
    </div>
  );
}

export default MobileNavBar;