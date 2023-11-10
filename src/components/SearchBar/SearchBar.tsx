import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar: React.FC<{
  setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsSearchFocused }) => {
  const [srch, setSrch] = useState("");
  return (
    <>
      <form className="search-bar">
        <input
          className="input-box"
          value={srch}
          onChange={(e) => setSrch(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          type="text"
          placeholder="Search"
        />
        <button type="submit" className="btn icon">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {srch}
    </>
  );
};

export default SearchBar;
