import React from "react";
import "./List.css";

export default function HomeList(props) {
  return (
    <React.Fragment>
      <div
        style={{
          
          display: "flex",
          maxWidth: "950px",
          justifyContent: "center",
          margin: "auto",
          paddingTop: "70px",
        }}
      >
        <hr style={{ width: "100%", height: "0.1px" }} />
        <div
          className="listTitle"
          style={{ minWidth: "100px", textAlign: "center" }}
        >
          Your List
        </div>

        <hr style={{ width: "100%", height: "0.1px" }} />
      </div>
      <div
        style={{ fontFamily:"sans-serif",padding:"80px",margin: "auto", display: "flex", justifyContent: "center" }}
      >
        Login in or Sign up to start saving your favorite books
      </div>
    </React.Fragment>
  );
}
