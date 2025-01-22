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
  console.log("LoggedIn prop in MobileNavBar:", isLoggedIn);

  const location = useLocation();

  return (
    <nav
      className={`mobile ${location.pathname === "/saved-news" ? "mobile--saved" : ""
        }`}
    >
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
          {console.log("Rendering Sign In or Log Out based on loggedIn:", isLoggedIn)}
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
                  className="mobile__link mobile__logout-button"
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
              className="mobile__link mobile__signin-button"
              onClick={handleLoginClick}
            >
              Sign In
            </button>

          )}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavBar;