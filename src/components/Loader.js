import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="loaderContainer">
      <div className="loader" />
      <div className="text">Good things take Time</div>
    </div>
  );
}

export default React.memo(Loader);
