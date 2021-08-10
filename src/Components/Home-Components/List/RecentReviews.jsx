import React, { useEffect, useState } from "react";
import "./List.css";
import Service from "../../../API/Service";
import {
  Link,
} from "react-router-dom";

var name = "";
export default function RecentReviews() {
  const [reviews, setReviews] = useState([]);

  async function convertBookToTitle(id) {
    await Service.getBookById(id).then((res) => {
      name = res.data.name;
    });
    return name;
  }

  useEffect(() => {
    Service.getReviewsByDate().then((res) => {
      setReviews(res.data);
    });
    
    convertBookToTitle(9781974702558).then((res)=>console.log(res));
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          maxWidth: "960px",
          justifyContent: "center",
          margin: "auto",
          paddingTop: "70px",
          borderBottom: "1px solid gray",
        }}
      >
        <div>
          <div
            className="listTitle"
            style={{ minWidth: "100px", textAlign: "left" }}
          >
            Today's Book Reviews : {Service.getCurrentDate()}
          </div>
        </div>
      </div>
      <div
        style={{
          margin: " auto",
          display: "flex",
          maxWidth: "950px",
        }}
      >
        <div className="fontstyle" style={{ marginTop: "10px" }}>
          {reviews.map((data) => (
            <div
              key={data.book}
              style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
            >
              <div style={{ display: "flex", paddingBottom: "5px" }}>
                <Link
                  to={`/book/${data.book}`}
                  style={{ marginRight: "20px" }}
                  className="book"
                >
                  <img
                    style={{
                      maxHeight: "80px",
                      border: "1px solid #bebebe",
                      padding: "1px",
                    }}
                    src={data.bookcover}
                  />
                </Link>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "885px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        transform: "translateY(-4px)",
                      }}
                    >
                      {data.title}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        color: "gray",
                        transform: "translateY(-4px)",
                      }}
                    >
                      User Rating: {data.rating}
                    </div>
                  </div>
                  <div>{data.comment}</div>
                  <div
                    style={{
                      marginTop: "30px",
                      fontSize: "13px",
                      display: "flex",
                    }}
                  >
                    {" "}
                    {}
                    <div style={{ marginRight: "5px" }}>By user </div>{" "}
                    <div style={{ color: "#1d439b" }}>{data.user}</div>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
