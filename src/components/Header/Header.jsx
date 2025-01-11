import Navigation from "../Navigation/Navigation";
import "./Header.css";
import { useLocation } from "react-router-dom";

function Header({ handleLoginClick, isLoggedIn, handleMobileMenuClick, handleHomeClick, handleSavedArticlesClick, handleLogOut }) {

  const location = useLocation();
  const savedNewsRoute = location.pathname === "/saved-news";
  return (
    <header className={`header ${savedNewsRoute ? "header--saved-news" : ""}`}>
      <button className={`header__title ${savedNewsRoute ? "header__title__saved-news" : ""}`} onClick={handleHomeClick}>News Explorer</button>
      <Navigation handleLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} handleMobileMenuClick={handleMobileMenuClick} handleHomeClick={handleHomeClick} handleSavedArticlesClick={handleSavedArticlesClick} handleLogOut={handleLogOut} />
    </header>
  );
}

export default Header;