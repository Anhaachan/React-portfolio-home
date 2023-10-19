import React from "react";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilLine } from "@iconscout/react-unicons";
const Social = () => {
  return (
    <div className="home__social">
      <a href="" className="home__social-icon" target="_blank">
        <UilInstagram />
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <UilGithubAlt />
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <UilLine />
      </a>
    </div>
  );
};

export default Social;
