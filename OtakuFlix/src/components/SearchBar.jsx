import React, { useEffect, useState, useRef } from "react";
import { useNavbarStore } from "/src/store/store.js";
import SearchIcon from "./icons/SearchIcon";

const SearchBar = () => {
  const { isSearchActive, toggleSearchActive } = useNavbarStore();
  const [searchInput, setSearchInput] = useState("");

  // assuming `data` is an array of items to be rendered in search results
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const SearchBarRef = useRef(null);

  useEffect(() => {
    // simulate loading delay

    const fetchData = async () => {
      // Call your function that retrieves data based on the search input
      // const results = await retrieveData(searchInput);
      // Update the search results state with the retrieved data
      // setSearchResults(results);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
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

  return (
    <div
      className={`absolute w-full rounded-md text-white bg-subBackground top-14 left-0 z-10 p-2 drop-shadow-xl
 ${isSearchActive ? "" : "hidden"} `}
      ref={SearchBarRef}
    >
      <div className="relative">
        <input
          type="text"
          className="rounded w-full bg-[#4E4E50] px-3 py-1"
          placeholder="Search..."
          onChange={handleSearchInputChanged}
        />

        <div className=" absolute right-3 top-1">
          <button className="p-1">
            <SearchIcon color={"white"} />
          </button>
        </div>

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
              <div className="bg-[#202022] flex p-3">
                <div className="bg-blue-200">
                  <img src="" alt="" className="w-10 h-10" />
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-base mb-1">One Piece</p>
                  <p className="text-xs decoration-gray-300	">
                    Oct 20, 1999 • TV Series • 24m
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1A1D] flex p-3">
                <div className="bg-blue-200">
                  <img src="" alt="" className="w-10 h-10" />
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-base mb-1">One Piece</p>
                  <p className="text-xs decoration-gray-300	">
                    Oct 20, 1999 • TV Series • 24m
                  </p>
                </div>
              </div>

              <div className="bg-[#202022] flex p-3">
                <div className="bg-blue-200">
                  <img src="" alt="" className="w-10 h-10" />
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-base mb-1">One Piece</p>
                  <p className="text-xs decoration-gray-300	">
                    Oct 20, 1999 • TV Series • 24m
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
