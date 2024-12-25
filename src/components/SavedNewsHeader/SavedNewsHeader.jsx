import "./SavedNewsHeader.css";

function SavedNewsHeader() {
    return(
      <div className="saved-news__header">
            <div className="saved-news__header__title">Saved articles</div>
            <h1 className="saved-news__header__info">Elise, you have 5 saved articles</h1>
            <div className="saved-news__header__keywords-container">
            <p className="saved-news__header__keywords-title">By keywords:</p>
            <p className="saved-news__header__keywords">Nature, Yellowstone, and 2 other</p>
            </div>
        </div>
        
    )
}

export default SavedNewsHeader;