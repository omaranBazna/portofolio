import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <form>
      <input type="text" />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
