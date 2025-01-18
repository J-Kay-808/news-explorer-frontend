import "./MobileNavBar.css";
import { useLocation } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";


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
    <div className={`mobile-menu ${isOpen} ? "mobile-menu_opened": ""`}>
      <div className="mobile-menu__header">
        <h2 className="mobile-menu__title">News Explorer</h2>
        <button
          className="mobile-menu__close-button"
          onClick={closeModal}
        ></button>
      </div>

      <ul className="mobile-menu__links">
        <li className="mobile-menu__link">
          <button
            className={`mobile-menu__home-button ${location.pathname === "/" ? "mobile-menu__home--active" : ""
              }`}
            onClick={handleHomeClick}
          >
            Home
          </button>
        </li>
        {isLoggedIn ? (
          <>
            <li className="mobile-menu__link">
              <button
                className={`mobile-menu__saved-articles-button ${location.pathname === "/saved-news"
                  ? "mobile-menu__saved-articles--active"
                  : ""
                  }`}
                onClick={handleSavedArticlesClick}
              >
                Saved articles
              </button>
            </li>
            <li className="mobile-menu__link">
              <button
                className="mobile-menu_logout-button"
                onClick={handleLogOut}
              >
                Elise
                <img
                  className="mobile-menu__logout-icon"
                  alt="Logout"
                  src={location.pathname === "/" ? logoutIcon : altIcon}
                />
              </button>
            </li>
          </>
        ) : (
          <button
            className="mobile-menu__sign-in-button"
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