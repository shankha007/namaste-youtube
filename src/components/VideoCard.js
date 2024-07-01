import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 mx-1 my-2 w-80">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="w-full font-bold h-14 py-2 line-clamp-2 text-ellipsis">
          {title}
        </li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="bg-gray-200 rounded-xl">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
