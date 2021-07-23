import React from "react";

export default function Title(props) {
  return (
    <div
      style={{
        width: "1040px",
        borderBottom: "1px solid black",
        justifyContent: "center",
        margin: "auto",
        height: "25px",
        alignItems: "center",
        textAlign: "left",
        fontSize: "20px",
      }}
    >
      {props.title}
    </div>
  );
}
