import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        style={{ margin: "0 auto", justifyContent: "center", display: "flex" }}
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
            position: "absolute",
          }}
        >
          <div>Francisco M</div>
          <div>Github</div>
        </div>
      </div>
    </React.Fragment>
  );
}
