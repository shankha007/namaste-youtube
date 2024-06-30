import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <div className="px-4 shadow-lg col-span-1">
      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg bg-gray-200 font-bold">Home</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Shorts</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          Subscriptions
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          YouTube Music
        </li>
      </ul>

      <h1 className="font-bold text-lg px-8 py-2">You</h1>
      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Your channel</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">History</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Playlists</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Your videos</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Watch later</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Liked videos</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          Downloads
        </li>
      </ul>

      <h1 className="font-bold text-lg px-8 py-2">Subscriptions</h1>
      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          Talk Football HD
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          Harry Potter Folklore
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Striver</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Zakir Khan</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Ali Abdaal</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">warikoo</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">YjR</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          Show More
        </li>
      </ul>

      <h1 className="font-bold text-lg px-8 py-2">Explore</h1>

      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Trending</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Shopping</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Music</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Movies</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Live</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Gaming</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">News</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Sports</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Courses</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          Fashion & Beauty
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Podcasts</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          Playables
        </li>
      </ul>

      <h1 className="font-bold text-lg px-8 py-2">More from YouTube</h1>
      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          YouTube Studio
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          YouTube Music
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          YouTube Kids
        </li>
      </ul>

      <ul className="border-b border-gray-400 mb-4">
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Settings</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">
          Report History
        </li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200">Help</li>
        <li className="py-2 px-8 rounded-lg hover:bg-gray-200 mb-4">
          Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
