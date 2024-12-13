import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({
  title,
  date,
  source,
  description,
  imageUrl,
  isLoggedIn,
  keyword,
}) {
  const location = useLocation();
  const savedNewsRoute = location.pathname === "/saved-news";

  return (
    <article className="card">
    <div className="card__container">
      {isLoggedIn ? (
        savedNewsRoute ? (
          <>
            <div className="card__keyword">{keyword}</div>
            <button className="card__delete-btn"></button>
            <div className="card__delete-confirm">Remove from saved</div>
          </>
        ) : (
          <>
            <button type="button" className="card__bookmark"></button>
            <div className="card__save-confirm">Sign in to save articles</div>
          </>
        )
      ) : (
        <>
          <button type="button" className="card__bookmark"></button>
          <div className="card__save-confirm">Sign in to save articles</div>
        </>
      )}
      {imageUrl && <img className="card__image" src={imageUrl} alt={title} />}
      <div className="card__info">
        <p className="card__date">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </div>
    </div>
    </article>
  );
}

export default NewsCard;