import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-1">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Talk Football HD</li>
        <li>Harry Potter Folklore</li>
        <li>Striver</li>
        <li>Zakir Khan</li>
      </ul>

      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Courses</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
