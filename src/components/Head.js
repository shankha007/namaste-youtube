import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }, [searchQuery, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      return clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSearchSuggestions]);

  return (
    <div className="grid grid-flow-col pb-2 px-2 m-2">
      <div className="flex col-span-3">
        <img
          className="h-10 p-2 cursor-pointer hover:bg-gray-200 rounded-full"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-10 mx-2 p-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-8 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions &&
          searchQuery.length !== 0 &&
          suggestions.length !== 0 && (
            <div className="absolute bg-white mt-1 py-4 w-1/3 rounded-xl shadow-xl border-x border-b border-gray-400">
              <ul>
                {suggestions.map((suggestion) => (
                  <li key={suggestion} className="px-4 py-1 hover:bg-gray-100">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
      <div className="col-span-1 grid justify-end mx-4">
        <img
          className="h-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
