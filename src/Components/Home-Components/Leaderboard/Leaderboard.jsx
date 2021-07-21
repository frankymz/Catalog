import React from "react";
import './Leaderboard.css'

export default function LeaderBoard() {
  return (
    <React.Fragment>
      <div className="boardGroup" style={{ borderLeft: "1px solid gray", borderBottom: "1px solid gray" }}>
        <div style={{ backgroundColor:"#dde1ec",display: "flex", width:"250px", justifyContent:"space-between", padding: "5px"}}>
          <div>Top Rated</div>
          <div>More</div>
        </div>
      </div>
    </React.Fragment>
  );
}
