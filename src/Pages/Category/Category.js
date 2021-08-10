import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import "./Category.css";
import Title from "../../Components/General-Components/Navigation/Title";
import Service from "../../API/Service";

export default function Category() {
  let { category } = useParams();
  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    Service.getBooksByGenre(category).then((response) => {
      setData({ data: response.data });
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
        {data.data.map((data) => (
          <Link
            to={`/book/${data.id}`}
            className="book"
            key={data.id}
            style={{
              textDecoration: "none",
              margin: "20px",
              borderBottom: "1px solid",
              maxWidth: "150px",
            }}
          >
            <img
              key={data.id}
              src={data.cover}
              style={{ width: "150px", height: "auto", height:"200px" }}
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
            <div style={{ color: "black", fontWeight:"400", fontSize:"14px" }}>By {data.author}</div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
