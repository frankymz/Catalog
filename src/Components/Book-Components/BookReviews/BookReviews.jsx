import React, { useEffect, useState } from "react";
import Service from "../../../Service/Service";
import "./BookReviews.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function BookReviews() {
  let { bookid } = useParams();
  const [reviews, setReviews] = useState({
    comments: [],
  });
  const [reviewsPresent, setReviewsPresent] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Service.getReviewForBook(bookid).then((res) => {
      console.log(res.data);
      setReviews({ comments: res.data });
      if (res.data == "") {
        setReviewsPresent(false);
      }
    });
    setLoading(false);
  }, []);

  if (!reviewsPresent) {
    return (
      <div
        style={{
          margin: "auto",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          There are no reviews for this book.
        </div>

        <div>
          
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {loading ? (
        <ClipLoader color={"#30427C"} loading={loading} size={100} />
      ) : (
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {reviews.comments.map((data) => (
            <div>
              <hr />
              <div
                key={data.book}
                style={{
                  display: "flex",
                  
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div style={{ maxWidth: "200px", width: "100%" }}>
                  {data.user}
                </div>
                <div>
                  <div>{data.rating}</div>
                  <div>{data.comment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
