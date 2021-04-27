import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

let Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <img className="logo" alt="logo" src="./img/logo.svg"></img>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
