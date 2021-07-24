import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Service from "../../../Service/Service";
import "./Carousel.css";

export default function Panel(props) {
  // const genre = props.genre;
  const [genre] = useState(props.genre);
  const [state, setState] = useState({
    books: [],
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Service.getBooksByGenre(genre).then((response) => {
      setState({ books: response.data });
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div style={{ marginTop: "20px", maxWidth: "700px" }}>
        <div
          style={{ marginLeft: "20px", marginBottom: "5px" }}
          className="genreSection"
        >
          <div style={{ fontWeight: "500" }}>{genre} </div>

          <Link
            to={`/${genre}`}
            style={{
              paddingRight: "5px",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            View More
          </Link>
        </div>
        <div className="row">
          {state.books.map((data) => (
            <Link
              key={data.id}
              to={`/book/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <img src={data.cover} className="poster" />
              <div
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "600",
                  textAlign: "center",
                  maxHeight: "50px",
                  maxWidth: "100px",
                }}
              >
                {data.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
