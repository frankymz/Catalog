import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        style={{
          margin: "auto",
          justifyContent: "center",
          display: "flex",
          bottom: 0,
          marginTop: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid",
            maxWidth: "1040px",

            alignItems: "center",
            padding: "10px 5px",
            bottom: 0,
            width: "100%",
            position: "relative",
          }}
        >
          <div>Francisco M</div>
          <div>Github</div>
        </div>
      </div>
    </React.Fragment>
  );
}
