import React from "react";

export function Tittle() {
  return (
    <div className="header py-6 bg-black fixed-top-0 z-0">
      <h1
        className="text-5xl text-center text-white ml-10 font-bold"
        style={{ fontFamily: "Sedan, serif" }}
      >
        Movie Review App
        <i className="fa-solid fa-film ml-4 mt-2"></i>
      </h1>
    </div>
  );
}
