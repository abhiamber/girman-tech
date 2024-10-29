// Home.js
import React, { useState } from "react";
import { Search } from "lucide-react";
import girmanImage from "../assets/girman.svg";
const backgroundImage =
  "https://s3-alpha-sig.figma.com/img/86b3/4e3b/d6374c0b8166b2787b822c93fa82e518?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ho1Ik8sB2K7GJhBLTfC8C-4D8nSdPe~s0mJ73b90-zRBupfi~02gO-Abtbcx1dGcnqWUwqcEHKLOJ4FFKwV4LR4gF6BMBydzEwOAgLiuXetybw3Cye0gkKQvilK-AVAhAhDKctChV7ZZW~YiVARcDlXvy2exl0xTrLc1KKDYNFMTwiNgl6ZeJhBJZTSkWR8BIEDEP9XO5Pbf95nW1v24bito6xguBjx~Sb0onEKBgr--Mndz6WmXYbpqGQvvEv4Gi0t9e9qboFjgL-NKYwKL1XHMWoSmRS75Cdmk2xdva2yt-T40yVmZ2H-PP4c1a1nrVMwC5esBD50KvxFro7KNaw__";

const Home = ({ handleEnterPress }) => {
  const [searchTerm, setSearchTerm] = useState();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEnterPress(searchTerm);
    }
  };
  return (
    <div
      className="flex flex-col items-center h-screen bg-gray-100 bg-cover bg-center px-40"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <img
        src={girmanImage}
        alt="Home Logo"
        className="w-3/4 sm:w-1/2 h-auto mt-20 sm:mt-40"
      />

      <div className="flex w-3/4 sm:w-1/2 mt-10 sm:mt-20">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 text-gray-300" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Anjali"
            className="w-full pl-10 border border-gray-200 rounded py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
