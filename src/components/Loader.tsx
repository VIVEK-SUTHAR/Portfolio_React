import React from "react";
import "../styles/Loader.css";
function Loader() {
  return (
    <div className="loaderContainer">
      <div className="loader" />
      <div className="text">Good things take Time</div>
    </div>
  );
}

export default React.memo(Loader);
