import React, { useEffect, useState } from "react";
import Panel from "../../Components/Home-Components/Carousel/Coursel";
import "./Home.css";
import LeaderBoard from "../../Components/Home-Components/Leaderboard/Leaderboard";

function Home() {

  
  return (
    <React.Fragment>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ marginRight: "15px" }}>
          <Panel genre="Sci-fi" />
          <Panel genre="Fiction" />
        </div>
        <div>
          <LeaderBoard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
