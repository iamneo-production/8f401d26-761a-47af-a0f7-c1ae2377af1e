import React from "react";

function Html() {
  return (
    <>
      <h1 id="ii"
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "pink"
        }}
      >
        Displacement
      </h1>
      <h1 id="ii"
        style={{
          position: "absolute",
          top: "140vh",
          left: "65vh",
          transform: "translateX(-65%)",
          color: "#f4b677"
        }}
      >
        Boom
      </h1>
      <h1 id="ii"
        style={{
          position: "absolute",
          top: "250vh",
          left: "75vw",
          transform: "translateX(-50%)",
          color: "#673ab7"
        }}
      >
        Euphoria
      </h1>
      <h1 id="ii"
        style={{
          position: "absolute",
          top: "320vh",
          left: "25vw",
          transform: "translateX(-50%)",
          color: "white"
        }}
      >
        Profit_Taking
      </h1>
      <h1 id="ii"
        style={{
          position: "absolute",
          top: "450vh",
          left: "75vw",
          transform: "translateX(-50%)",
          color: "navy"
        }}
      >
        Panic
      </h1>
      <div className="btndiv">
        <a href="/home" className="btn">Click_Me</a>
      </div>
      <h3 className="stage">5 STAGES OF ASSET BUBBLE</h3>
      
    </>
  );
}

export { Html };
