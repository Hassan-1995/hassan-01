// import { Avatar } from "@radix-ui/themes";

// const ImageContainer = () => {
//   return (
//     <div className="h-screen w-screen flex opacity-30">
//       <Avatar src="/test.jpg" fallback="A" className="h-screen w-screen flex" />
//     </div>
//   );
// };

// export default ImageContainer;
"use client";

import { useState } from "react";
import { Avatar } from "@radix-ui/themes";

const ImageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-screen w-screen flex opacity-30">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <p className="text-white font-extrabold text-4xl">Loading...</p>
        </div>
      )}
      <Avatar
        src="/test.jpg"
        fallback="A"
        className={`h-screen w-screen flex transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleImageLoad} // Detect when the image has loaded
      />
    </div>
  );
};

export default ImageContainer;
