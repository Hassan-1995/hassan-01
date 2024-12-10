import React from "react";
import InformationContainer from "./InformationContainer";
import ImageContainer from "./ImageContainer";

const HomePage = () => {
  return (
    <div className="bg-yellow-950 w-screen h-screen flex">
      <div className="w-1/2 h-screen overflow-hidden">
        <ImageContainer />
      </div>
      <div className="flex-grow h-screen w-1/2 -ml-28">
        <InformationContainer />
      </div>
    </div>
  );
};

export default HomePage;
