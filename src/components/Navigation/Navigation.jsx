import { useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";
import menuIcon from "../../assets/menuIcon.svg";
import menuIconBlack from "../../assets/menuIconBlack.svg";

function Navigation({
    handleLoginClick,
    isLoggedIn,
    handleMobileMenuClick,
    handleHomeClick,
    handleSavedArticlesClick,
    handleLogOut,
  }) {
    const location = useLocation();
  
    console.log(isLoggedIn);
    return (
      <nav
        className={`navigation ${
          location.pathname === "/saved-news" ? "navigation--saved" : ""
        }`}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <button
              className={`navigation__home-button ${
                location.pathname === "/" ? "navigation__home--active" : ""
              }`}
              onClick={handleHomeClick}
            >
              Home
            </button>
          </li>
          {isLoggedIn ? (
            <>
              <li className="navigation__item">
                <button
                  className={`navigation__saved-articles-button ${
                    location.pathname === "/saved-news"
                      ? "navigation__saved-articles--active"
                      : ""
                  }`}
                  onClick={handleSavedArticlesClick}
                >
                  Saved articles
                </button>
              </li>
              <li className="navigation__item">
                <button
                  className="navigation__logout-button"
                  onClick={handleLogOut}
                >
                  Elise
                  <img
                    className="navigation__logout-icon"
                    alt="Logout"
                    src={location.pathname === "/" ? logoutIcon : altIcon}
                  />
                </button>
              </li>
            </>
          ) : (
            <li className="navigation__item">
              <button
                className="navigation__signin-button"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
        <button
          type="button"
          className="navigation__mobile-button"
          style={{
            backgroundImage: `url(${
              location.pathname === "/saved-news" ? menuIconBlack : menuIcon
            })`,
          }}
          onClick={handleMobileMenuClick}
        ></button>
      </nav>
    );
  }
  
  export default Navigation;