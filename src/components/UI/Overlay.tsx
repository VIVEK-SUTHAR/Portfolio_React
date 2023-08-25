import React from "react";

function Overlay() {
  const handleOverlayClicked = () => {
    document.getElementById("overlay")?.classList.remove("active");
    document.querySelector("body")?.style.setProperty("overflow-y", "auto");
  };
  return (
    <div className="overlay" id="overlay" onClick={handleOverlayClicked}>
      <img src="" alt="Full Size" id="fullImage" />
    </div>
  );
}

export default Overlay;
