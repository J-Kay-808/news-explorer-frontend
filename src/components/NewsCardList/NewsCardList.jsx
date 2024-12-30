import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";


function NewsCardList({ articles, isLoading, error, isLoggedIn }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  return (
    <section className="newscards">
      {isLoading && <Preloader />}
      {!isLoading && articles.length > 0 && (
        <h2 className="newscards__title">Search results</h2>
      )}
      {error && <p className="newscards__error">{error}</p>}
      {articles.length === 0 && !isLoading && !error && <NotFound />}

      <ul className="newscards__list">
        {articles.slice(0, visibleCards).map((article, index) => (
          <li className="newscards__item" key={index}>
          <NewsCard
            isLoggedIn={isLoggedIn}
            keyword={article.keyword}
            title={article.title}
            date={new Date(article.publishedAt).toDateString()}
            source={article.source.name}
            description={article.description}
            imageUrl={article.urlToImage}
          />
          </li>
        ))}
      </ul>
      {visibleCards < articles.length && (
        <button
          type="button"
          className="newscards__button"
          onClick={showMoreCards}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;