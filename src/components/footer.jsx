import React from "react";

let Footer = (props) => {
  return (
    <footer>
      <img className="logo" alt="logo" src="./img/moncho.svg"></img>
      <p>
        Hecho con resentimiento y apatia por un par de{" "}
        <a target="_blank" rel="noreferrer" href="http://www.moncho.design">Moncho</a>(s) &#169;2021
      </p>
      <img className="logo" alt="logo" src="./img/logo.svg"></img>
    </footer>
  );
};

export default Footer;
