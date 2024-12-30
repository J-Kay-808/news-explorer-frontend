import "./NotFound.css";
import notFoundIcon from "../../assets/not-found.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img
        className="not-found__icon"
        src={notFoundIcon}
        alt="not found icon"
      />
      <h2 className="not-found__title">Nothing found</h2>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;