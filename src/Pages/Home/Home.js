import React, { useEffect, useState } from "react";
import Panel from "../../Components/Home-Components/Carousel/Coursel";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div
        style={{
          margin: "auto",
          maxWidth: "1040px",
          
        }}
      >
        <div>
          <Panel />
          <Panel />
        </div>
        <div>121221{/* insert sideboard here */}</div>
      </div>
    </React.Fragment>
  );
}

export default Home;
