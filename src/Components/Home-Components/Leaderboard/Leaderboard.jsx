import React, { useState, useEffect } from "react";
import "./Leaderboard.css";
import Service from "../../../API/Service";
import { Link } from "react-router-dom";

export default function LeaderBoard() {
  const [topRated, setTopRated] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    Service.getBooks().then((res) => {
      setTopRated([
        res.data[0],
        res.data[1],
        res.data[2],
        res.data[3],
        res.data[4],
      ]);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div
        style={{ maxWidth: "300px", backgroundColor: "#f5f6f9" }}
        className="boardFont"
      >
        <div className="boardGroup" style={{ borderBottom: "1px solid gray" }}>
          <div
            style={{
              backgroundColor: "#dde1ec",
              display: "flex",
              width: "290px",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div>Top Rated</div>
            <Link style={{textDecoration:"none"}} to='/TopRated'>More</Link>
          </div>
        </div>
        {topRated.map((data, i) => (
          <React.Fragment key={data.id}>
            <div style={{ display: "flex", padding: "10px" }}>
              <div style={{ marginRight: "10px", fontWeight: "600" }}>
                {i + 1}
              </div>
              <div
                style={{
                  justifyContent: "center",
                  marginRight: "5px",
                  maxWidth: "75px",
                  width:"100%",textAlign:"center"
                }}
              >
                <img
                  style={{
                    maxHeight: "80px",
                    padding: "1px",
                    border: "1px solid #bebebe",
                  }}
                  src={data.cover}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <Link
                  style={{
                    textOverflow: "clip",
                    overflowX: "hidden",
                    color: "#1d439b",
                    fontWeight: "600"
                  }}
                  className="link"
                  to={`/book/${data.id}`}
                >
                  {data.name}
                </Link>
                <div style={{ marginTop: "10px", color: "#7f7f7f" }}>
                  Rating: {data.avgRating}
                </div>
                <div style={{ marginTop: "10px", color: "#7f7f7f" }}>
                  Genre: {data.genre}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
