import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import React from "react";

const Header = () => {
  return (
    <header
      className="h-[50px] shadow-md font-bold fixed top-0 left-0 right-0 text-primary z-[999]"
      id="header"
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <h1 className="text-2xl text-primary">Rabani</h1>
          <div className="flex justify-center items-center gap-5">
            <span>
              <InstagramLogo size={32} />
            </span>
            <span>
              <YoutubeLogo size={32} />
            </span>
            <span>
              <LinkedinLogo size={32} />
            </span>
            <span>
              <GithubLogo size={32} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
