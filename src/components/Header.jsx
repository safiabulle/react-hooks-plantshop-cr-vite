import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="title">
        Plantsy
        <span className="logo" role="img" aria-label="plant">
          🌱
        </span>
      </h1>

      <p className="subtitle">
        Find your favorite plants and keep track of stock easily.
      </p>
    </header>
  );
}

export default Header;
