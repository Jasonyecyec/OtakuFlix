import React, { useEffect, useState, useRef } from "react";
import { useNavbarStore } from "/src/store/store.js";
import SearchIcon from "./icons/SearchIcon";
import styled, { css } from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "../pages/Search";
import axios from "axios";
import useFetchAnimeSearch from "../hooks/useFetchAnimeSearch";

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
  // const [searchResults, setSearchResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const SearchBarRef = useRef(null);
  const inputRef = useRef(null);

  const { isLoading, searchResults, setIsLoading } =
    useFetchAnimeSearch(searchInput);

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchData = async () => {
  //     if (isMounted) {
  //       try {
  //         const getAnimeSearchResults = await getAnimeSearchResults(
  //           searchInput
  //         );
  //         console.log(getAnimeSearchResults);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [searchInput]);

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
              {searchResults.data.length > 0 ? (
                searchResults.data.map((anime) => (
                  <Link
                    to={`/watch/${anime.id}-episode-1`}
                    onClick={handleClickLink}
                  >
                    <HoveredDiv key={anime.id}>
                      <div className="bg-slate-900 object-contain">
                        <img src={anime.image} alt="" className="w-10 h-10" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-base mb-1 text-white">
                          {anime.title}
                        </p>
                        <p className="text-xs" id="hovered-paragraph">
                          {anime.releaseDate} • {anime.type} • {anime.status}
                        </p>
                      </div>
                    </HoveredDiv>
                  </Link>
                ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
