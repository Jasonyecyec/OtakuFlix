import React, { useEffect, useState, useRef } from "react";
import { useNavbarStore } from "/src/store/store.js";
import SearchIcon from "./icons/SearchIcon";
import styled, { css } from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "../pages/Search";

const HoveredDiv = styled.div`
  background-color: ${(props) => (props.one ? "#1A1A1D" : "#202022")};
  display: flex;
  padding: 0.75rem;
  cursor: pointer;
  color: #b4b4b4;
  transition: 150ms ease-in-out;

  &:hover #hovered-paragraph {
    color: white;
  }

  &:hover {
    background-color: #29292c;
  }
`;

const SearchBar = () => {
  const { isSearchActive, toggleSearchActive } = useNavbarStore();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const pagesURL = ["home", "anime", "manga", "manhwa"];

  // assuming `data` is an array of items to be rendered in search results
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const SearchBarRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // simulate loading delay

    const fetchData = async () => {
      // Call your function that retrieves data based on the search input
      // const results = await retrieveData(searchInput);
      // Update the search results state with the retrieved data
      // setSearchResults(results);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, [searchInput]);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutsideSearch = (event) => {
      if (
        SearchBarRef.current &&
        !SearchBarRef.current.contains(event.target)
      ) {
        if (isSearchActive) {
          toggleSearchActive();
        }
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutsideSearch);

    // Clean up event listeners when the component unmounts or the dependency changes
    return () => {
      // Remove event listener for clicks outside the menu
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [isSearchActive, toggleSearchActive]); //track when toggleSearchActive changes or dependency changes
  //track when toggleSearchActive changes or dependency changes

  const handleSearchInputChanged = (e) => {
    setSearchInput(e.target.value);
    setIsLoading(true);
  };

  // Function to handle result clicks
  const handleClickLink = (event) => {
    toggleSearchActive();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //reset search input
    setSearchInput("");

    //get the path from the url
    const path = location.pathname;
    const page = pagesURL.find((pagesURL) => path.includes(pagesURL));

    //toggle search bar
    toggleSearchActive();

    //redirect to search page
    navigate(`/search/${page}?keyword=${searchInput}`);
  };

  return (
    <div
      className={`absolute w-full rounded-md text-white bg-subBackground top-14 left-0 z-10 p-2 drop-shadow-xl
 ${isSearchActive ? "" : "hidden"} `}
      ref={SearchBarRef}
    >
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded w-full bg-[#4E4E50] px-3 py-1 focus:outline-none"
            placeholder="Search..."
            onChange={handleSearchInputChanged}
            value={searchInput}
            required
          />

          <div className=" absolute right-3 top-1">
            <button className="p-1" type="submit">
              <SearchIcon color={"white"} />
            </button>
          </div>
        </form>

        {/* Search Result */}
        <div className="search-result-container w-full mt-3 rounded ">
          {/* Search Loading Wrapper */}
          {isLoading ? (
            <div className="search-loading-wrapper flex justify-center p-3">
              <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            </div>
          ) : !searchInput.length ? (
            <p>Empty</p>
          ) : (
            <div className="list-result-container">
              <Link to="/watch" onClick={handleClickLink}>
                <HoveredDiv>
                  <div className="bg-blue-200">
                    <img src="" alt="" className="w-10 h-10" />
                  </div>

                  <div className="ml-3">
                    <p className="font-semibold text-base mb-1 text-white">
                      One Piece
                    </p>
                    <p className="text-xs" id="hovered-paragraph">
                      Oct 20, 1999 • TV Series • 24m
                    </p>
                  </div>
                </HoveredDiv>
              </Link>

              <Link to="/watch" onClick={handleClickLink}>
                <HoveredDiv one>
                  <div className="bg-blue-200">
                    <img src="" alt="" className="w-10 h-10" />
                  </div>

                  <div className="ml-3">
                    <p className="font-semibold text-base mb-1 text-white">
                      One Piece
                    </p>
                    <p className="text-xs" id="hovered-paragraph">
                      Oct 20, 1999 • TV Series • 24m
                    </p>
                  </div>
                </HoveredDiv>
              </Link>

              <Link to="/watch" onClick={handleClickLink}>
                <HoveredDiv>
                  <div className="bg-blue-200">
                    <img src="" alt="" className="w-10 h-10" />
                  </div>

                  <div className="ml-3">
                    <p className="font-semibold text-base mb-1 text-white">
                      One Piece
                    </p>
                    <p className="text-xs" id="hovered-paragraph">
                      Oct 20, 1999 • TV Series • 24m
                    </p>
                  </div>
                </HoveredDiv>
              </Link>

              <Link to="/watch" onClick={handleClickLink}>
                <HoveredDiv one>
                  <div className="bg-blue-200">
                    <img src="" alt="" className="w-10 h-10" />
                  </div>

                  <div className="ml-3">
                    <p className="font-semibold text-base mb-1 text-white">
                      One Piece
                    </p>
                    <p className="text-xs" id="hovered-paragraph">
                      Oct 20, 1999 • TV Series • 24m
                    </p>
                  </div>
                </HoveredDiv>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
