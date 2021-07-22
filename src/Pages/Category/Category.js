import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./Category.css";

const dataSet = [
  {
    name: "Name0",
    image:
      "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg",
    id: "0",
  },
  {
    name: "Name1",
    image:
      "https://prodimage.images-bn.com/pimages/9780062060624_p0_v1_s600x595.jpg",
    id: "1",
  },
  {
    name: "Name2",
    image:
      "https://prodimage.images-bn.com/pimages/9780062439598_p0_v1_s600x595.jpg",
    id: "2",
  },
  {
    name: "Name3",
    image:
      "https://prodimage.images-bn.com/pimages/9780062846907_p0_v1_s600x595.jpg",
    id: "3",
  },
  {
    name: "Name4",
    image:
      "https://prodimage.images-bn.com/pimages/9780062909879_p0_v1_s600x595.jpg",
    id: "4",
  },
  {
    name: "Name5",
    image:
      "https://prodimage.images-bn.com/pimages/9780062941206_p0_v1_s600x595.jpg",
    id: "5",
  },
  {
    name: "Name6",
    image:
      "https://prodimage.images-bn.com/pimages/9780062941237_p0_v1_s600x595.jpg",
    id: "6",
  },
  {
    name: "Name7",
    image:
      "https://prodimage.images-bn.com/pimages/9780063005549_p0_v1_s600x595.jpg",
    id: "7",
  },
  {
    name: "Name8",
    image:
      "https://prodimage.images-bn.com/pimages/9780131103627_p0_v1_s600x595.jpg",
    id: "8",
  },
  {
    name: "Name9",
    image:
      "https://prodimage.images-bn.com/pimages/9780134190440_p0_v1_s600x595.jpg",
    id: "9",
  },
  {
    name: "Name10",
    image:
      "https://prodimage.images-bn.com/pimages/9780134494166_p0_v1_s600x595.jpg",
    id: "10",
  },
];

/*
Object will have name, rating, image, and author
*/

export default function Category() {
  let { category } = useParams();
  return (
    <React.Fragment>
      Category of book: {category}
      <div
        className="break"
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {dataSet.map((data, i) => (
          <Link
            to={`/book/${i}`}
            style={{ textDecoration: "none", padding: "20px" }}
          >
            <img
              key={i}
              src={data.image}
              style={{ width: "150px", height: "auto" }}
            />
            <div
              style={{
                color: "black",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              {data.name}
            </div>
            <div style={{ color: "black" }}>By Filet Mignon</div>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "2px" }}>2</div>
              <div style={{ color: "#d4bc24" }}> &#9733;</div>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
