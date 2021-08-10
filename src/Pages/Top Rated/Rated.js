import React, { useState, useEffect } from "react";
import Service from "../../API/Service";
import Title from "../../Components/General-Components/Navigation/Title";
import { Link } from "react-router-dom";
import "./Rated.css"

export default function Rated() {
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    Service.getBooks().then((res) => {
      setTopRated([
        res.data[0],
        res.data[1],
        res.data[2],
        res.data[3],
        res.data[4],
        res.data[5],
        res.data[6],
        res.data[7],
        res.data[8],
        res.data[9],
      ]);
      setLoading(false);
    });
    console.log(topRated);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Title title="Top 10 Rated Books" />
      {topRated.map((data, i) => (
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            justifyContent: "center",
            borderBottom: "1px solid gray",
          }}
          key={i}
          className="fontTag"
        >
          <div
            style={{
              display: "flex",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <div style={{ padding: "20px", fontSize: "25px", maxWidth:"10px" }}>{i + 1}</div>
            <div style={{ maxWidth: "200px", width: "100%", textAlign:"center" }}>
              <img style={{ maxHeight: "200px" }} src={data.cover} />
            </div>

            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "20px", fontWeight:"700" }}>{data.name}</div>
              <div style={{ paddingTop: "10px" }}>Rating: {data.avgRating}</div>
              <div style={{ paddingTop: "10px" }}>by {data.author}</div>
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  borderBottom: "1px solid #DCDCDC",
                  alignItems:"center"
                }}
              >
                <div
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {data.genre}
                </div>
                <Link to={`/book/${data.id}`}>
                  <button className="viewButton">View Book</button>
                </Link>
              </div>

              <div>
                <div
                  style={{
                    maxWidth: "707px",
                    maxHeight: "90px",
                    overflowY: "hidden",
                    textOverflow: "ellipsis",
                    paddingTop: "10px",
                  }}
                >
                  {data.description}
                </div>
                <div style={{ fontSize: "20px" }}>...</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
