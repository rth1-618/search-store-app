import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar: React.FC<{
  setSrchText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setIsResultPage: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setSrchText, setIsSearchFocused, setIsResultPage }) => {
  const [srch, setSrch] = useState("");
  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResultPage(true);
    setSrchText(srch);
  };
  return (
    <form className="search-bar" onSubmit={handleInput}>
      <input
        className="input-box"
        value={srch}
        onChange={(e) => setSrch(e.target.value)}
        type="text"
        placeholder="Search"
        onFocus={() => setIsSearchFocused(true)}
      />
      <button type="submit" className="btn icon">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
