import "./SavedNewsCardList.css";
import image from "../../assets/image_06.png";

function SavedNewsCardList({}) {
  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <div className="saved-news__card">
          <button className="saved-news__card-delete-btn"></button>
          <div className="saved-news__card-delete-confirm">
            Remove from saved
          </div>
          <img
            className="saved-news__card-image"
            alt="newscard image"
            src={image}
          ></img>
          <div className="saved-news__card-info">
            <p className="saved-news__card-date">November 4, 2020</p>
            <h2 className="saved-news__card-title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="saved-news__card-description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="saved-news__card-source">TREEHUGGER</p>
          </div>
        </div>
        <div className="saved-news__card">
          <button className="saved-news__card-delete-btn"></button>
          <div className="saved-news__card-delete-confirm">
            Remove from saved
          </div>
          <img
            className="saved-news__card-image"
            alt="newscard image"
            src={image}
          ></img>
          <div className="saved-news__card-info">
            <p className="saved-news__card-date">November 4, 2020</p>
            <h2 className="saved-news__card-title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="saved-news__card-description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="saved-news__card-source">TREEHUGGER</p>
          </div>
        </div>
        <div className="saved-news__card">
          <button className="saved-news__card-delete-btn"></button>
          <div className="saved-news__card-delete-confirm">
            Remove from saved
          </div>
          <img
            className="saved-news__card-image"
            alt="newscard image"
            src={image}
          ></img>
          <div className="saved-news__card-info">
            <p className="saved-news__card-date">November 4, 2020</p>
            <h2 className="saved-news__card-title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="saved-news__card-description">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having...
            </p>
            <p className="saved-news__card-source">TREEHUGGER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedNewsCardList;