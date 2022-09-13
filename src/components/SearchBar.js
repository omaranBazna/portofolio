import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/SearchBar.css";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search for skill or project..." />
      <Link to="/portofolio/main">
        <button type="submit">
          <SearchIcon />
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;
