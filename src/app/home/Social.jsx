import React from "react";
import { assets } from "../../../assets/assets.js";
import Image from "next/image";

const Social = () => {
    return (
    <div
      className="
        fixed 
        bottom-4 
        right-4 
        flex 
        flex-col 
        items-center 
        space-y-4 
        z-50
      "
    >
      {/* GitHub */}
      <a
        href="https://github.com/THEMANNICHOLAS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="
            w-12 
            h-12 
            bg-white 
            bg-opacity-20 
            backdrop-blur 
            rounded-full 
            flex 
            items-center 
            justify-center 
            transition 
            transform 
            hover:scale-110
          "
        >
          <Image
            src={assets.images.github_logo}
            alt="GitHub"
            className="w-8 h-8"
          />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/justyour_averagepics/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="
            w-12
            h-12
            bg-white 
            bg-opacity-20 
            backdrop-blur 
            rounded-full 
            flex 
            items-center 
            justify-center 
            transition 
            transform 
            hover:scale-110
          "
        >
          <Image
            src={assets.images.instagram_logo}
            alt="Instagram"
            className="w-8 h-8"
          />
        </div>
      </a>

     {/* LinkedIn */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="
            w-12
            h-12
            bg-white 
            bg-opacity-20 
            backdrop-blur 
            rounded-full 
            flex 
            items-center 
            justify-center 
            transition 
            transform 
            hover:scale-110
          "
        >
          <Image
            src={assets.images.linkedin_logo}
            alt="Instagram"
            className="w-8 h-8"
          />
        </div>
      </a>

      {/* You can add more icons the same way (e.g. LinkedIn, Twitter, etc.) */}
      {/* Just copy one of the <a> blocks above and replace href + Image src */}
    </div>
  )
}

export default Social
