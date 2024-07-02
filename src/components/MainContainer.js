import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  return (
    <div className="col-span-10 overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
