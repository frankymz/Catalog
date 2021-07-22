import React from "react";
import "./Modal.css";

export default function Modal({ modal, setModal }) {
  return <React.Fragment>{modal ? <div>Modal</div> : null}</React.Fragment>;
}
