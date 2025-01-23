import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main({ onSearch }) {


  return (
    <main className="main" >
      <div className="main__text-container">
        <h1 className="main__title">What's going on in the world</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm onSearch={onSearch} />
    </main>
  );
}

export default Main;