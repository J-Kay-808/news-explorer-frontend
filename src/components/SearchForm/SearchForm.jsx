import "./SearchForm.css";
import { useState } from "react";

function SearchForm({onSearch}) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange =(event) => {
    setKeyword(event.target.value);
  };

  const handleSearchClick =(e) => {
    e.preventDefault();
    if (!keyword) {
      setError("Please enter a keyword");
      console.error("Keyword is empty!");
    } else {
      setError("");
      console.log("Calling onSearch with keyword:", keyword);
      onSearch(keyword);
    }
  }

  return (
    <form className="searchform" onSubmit={handleSearchClick}>
      <input className="searchform__input" type="text" placeholder="Enter topic" value={keyword} onChange={handleInputChange}></input>
      <button type="submit" className="searchform__button">Search</button>
    </form>
  );

}
export default SearchForm;