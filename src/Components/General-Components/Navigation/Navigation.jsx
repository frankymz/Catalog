import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navigation.css";
import Modal from "./Modal";

export default function Nav() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal((prev) => !prev);
  }

  return (
    <React.Fragment>
      <Modal modal={modal} setModal={setModal} />
      <div className="nav">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1040px",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <button
            className="buttonStyle"
            onClick={() => {
              window.location.replace("/");
            }}
            style={{ color: "#2e51a2", fontSize: "40px", fontWeight: "600" }}
          >
            Catalog
          </button>
          <div>
            <button onClick={openModal} style={{ padding: "3px 5px" }}>
              Login or Sign Up
            </button>
          </div>
        </div>
        <div
          style={{
            width: "1040px",
            border: "1px solid black",
            justifyContent: "space-between",
            margin: "auto",
            height: "30px",
            alignItems: "center",
            display: "flex",
            textAlign: "left",
            marginBottom: "10px",
            backgroundColor: "#2e51a2",
            color: "white",
          }}
        >
          <div style={{ alignItems: "left", display: "flex", padding: "10px" }}>
            <Link to="/Sci-Fi">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Sci-Fi{" "}
              </button>
            </Link>

            <Link to="/Fiction">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Fiction{" "}
              </button>
            </Link>

            <Link to="/Manga">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Manga{" "}
              </button>
            </Link>

            <Link to="/Romance">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Romance{" "}
              </button>
            </Link>
            <Link to="/Literature">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Literature
              </button>
            </Link>
            <Link to="/Science">
              <button className="buttonStyle" style={{ marginRight: "20px" }}>
                Science
              </button>
            </Link>
          </div>
          <div
            style={{
              alignItems: "right",
              float: "right",
              textAlign: "right",
              marginRight: "20px",
            }}
          >
            <Link to="/TopRated" style={{ marginLeft: "20px" }}>
              <button className="buttonStyle">Top Rated</button>
            </Link>

            <Link to="/Authors" style={{ marginLeft: "20px" }}>
              <button className="buttonStyle">Authors</button>
            </Link>

            <Link to="/list/:userid" style={{ marginLeft: "20px" }}>
              <button className="buttonStyle">Your List</button>
            </Link>
          </div>
        </div>
        {/* <div
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
          Welcome to Catalog!
        </div> */}
      </div>
    </React.Fragment>
  );
}
