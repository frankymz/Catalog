import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navigation.css";
import LogoutButton from "../../Login-Register/LogoutButton";
import LoginButton from "../../Login-Register/LoginButton";
import RegisterButton from "../../Login-Register/RegisterButton";
import { useAuth0 } from "@auth0/auth0-react";

const AuthNav = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <div style={{ alignItems: "center" }}>
          <LoginButton /> <RegisterButton />
        </div>
      )}
    </div>
  );
};

export default function Nav() {
  const { user, isAuthenticated } = useAuth0();
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setNickname(user.nickname);
    }
  }, [isAuthenticated]);

  return (
    <React.Fragment>
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
            <AuthNav />
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

            <Link to={`/list/${nickname}`} style={{ marginLeft: "20px" }}>
              <button className="buttonStyle">Your Wish List</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
