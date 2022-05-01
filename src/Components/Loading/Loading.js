import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Loading = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="spinner-border " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
