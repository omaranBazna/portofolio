import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/SearchBar.css";
const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search for skill or project " />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
