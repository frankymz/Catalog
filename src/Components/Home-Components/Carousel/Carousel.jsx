import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Service from "../../../Service/Service";
import "./Carousel.css";

const dataSet = [
  {
    name: "Name1",
    image:
      "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg",
    id: "0",
  },
  {
    name: "Name2",
    image:
      "https://prodimage.images-bn.com/pimages/9780062060624_p0_v1_s600x595.jpg",
    id: "1",
  },
  {
    name: "Name3",
    image:
      "https://prodimage.images-bn.com/pimages/9780062439598_p0_v1_s600x595.jpg",
    id: "2",
  },
  {
    name: "Name4",
    image:
      "https://prodimage.images-bn.com/pimages/9780062846907_p0_v1_s600x595.jpg",
    id: "3",
  },
  {
    name: "Name5",
    image:
      "https://prodimage.images-bn.com/pimages/9780062909879_p0_v1_s600x595.jpg",
    id: "4",
  },
  {
    name: "Name6",
    image:
      "https://prodimage.images-bn.com/pimages/9780062941206_p0_v1_s600x595.jpg",
    id: "5",
  },
  {
    name: "Name7",
    image:
      "https://prodimage.images-bn.com/pimages/9780062941237_p0_v1_s600x595.jpg",
    id: "6",
  },
  {
    name: "Name8",
    image:
      "https://prodimage.images-bn.com/pimages/9780063005549_p0_v1_s600x595.jpg",
    id: "7",
  },
  {
    name: "Name9",
    image:
      "https://prodimage.images-bn.com/pimages/9780131103627_p0_v1_s600x595.jpg",
    id: "8",
  },
  {
    name: "Name10",
    image:
      "https://prodimage.images-bn.com/pimages/9780134190440_p0_v1_s600x595.jpg",
    id: "9",
  },
  {
    name: "Name11",
    image:
      "https://prodimage.images-bn.com/pimages/9780134494166_p0_v1_s600x595.jpg",
    id: "10",
  },
];
/*
Object must be:
image:
Name:
id:
*/

export default function Panel(props) {
  // const genre = props.genre;
  const [genre, setGenre] = useState(props.genre);
  const [state, setState] = useState({
    books: [],
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Service.getBooksByGenre(genre).then((response) => {
      setState({ books: response.data });
      setLoading(false);
    });
    console.log("state.books is ", state.books);
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
        {(state.books).map((data) => (
            <Link key={data.id} to={`/book/${data.id}`} style={{ textDecoration: "none" }}>
              <img src={data.cover} className="poster" />
              <div
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "600",
                  textAlign: "center",
                  maxHeight:"50px",
                  maxWidth:"100px"
                }}
              >
                {data.name}
              </div>
            </Link>
          ))}
        </div>
        {/* {JSON.stringify(state.products[0].price)} */}
      </div>
    </React.Fragment>
  );
}
