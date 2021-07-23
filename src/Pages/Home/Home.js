import React, { useEffect, useState } from "react";
import Panel from "../../Components/Home-Components/Carousel/Carousel";
import "./Home.css";
import LeaderBoard from "../../Components/Home-Components/Leaderboard/Leaderboard";
import Title from "../../Components/General-Components/Navigation/Title";

function Home() {
  // const title = JSON.stringify(props)
  // console.log('props is',props)
  // console.log('title is',title)
  return (
    <React.Fragment>
      <Title title="Welcome to Catalog!"/>
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
          <Panel genre="Manga" />
          <Panel genre="Romance" />
          <Panel genre="Literature" />
          <Panel genre="Science" />
        </div>
        <div>
          <LeaderBoard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
