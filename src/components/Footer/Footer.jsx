import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook-icon.svg";


function Footer() {
    return (
      <footer className="footer">
        <p className="footer__copyright">
          &copy;2024 Supersite, Powered by News API
        </p>
        <nav className="footer__menu">
          <ul className="footer__navigation">
            <li className="footer__navigation-item">
              <a
                href="/"
                target="_blank"
                className="footer__navigation-link footer__navigation-link-home"
              >
                Home
              </a>
            </li>
            <li className="footer__navigation-item">
              <a
                href="https://www.tripleten.com"
                target="_blank"
                className="footer__navigation-link footer__navigation-link-tripleten"
              >
                TripleTen
              </a>
            </li>
          </ul>
          <ul className="footer__icons">
            <li className="footer__icon-item">
              <a
                href="https://github.com/J-Kay-808"
                target="_blank"
                className="footer__icon-link"
              >
                <img
                  src={githubIcon}
                  className="footer__icon footer__icon-github"
                  alt="Github icon"
                />
              </a>
            </li>
            <li className="footer__icon-item">
              <a
                href="https://www.facebook.com/login.php/"
                target="_blank"
                className="footer__icon-link"
              >
                <img
                  src={facebookIcon}
                  className="footer__icon footer__icon-facebook"
                  alt="Facebook icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
  
  export default Footer;