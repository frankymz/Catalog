import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./Category.css";
import Title from "../../Components/General-Components/Navigation/Title";
import Service from "../../Service/Service";

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
  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    Service.getBooksByGenre(category).then((response) => {
      setData({ data: response.data });
      console.log(data);
    });
  }, [category]);

  return (
    <React.Fragment>
      <Title title={`${category} Category`} />
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
        {(data.data).map((data) => (
          <Link
            to={`/book/${data.id}`}
            className="book"
            style={{
              textDecoration: "none",
              margin: "20px",
              borderBottom: "1px solid",
              maxWidth:"150px"
            }}
          >
            <img
              key={data.id}
              src={data.cover}
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
            <div style={{ color: "black" }}>By {data.author}</div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
