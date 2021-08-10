import React, { useEffect, useState } from "react";
import Service from "../../../API/Service";
import "./BookReviews.css";
import { useParams } from "react-router-dom";
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
    console.log(reviews);
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

        <div></div>
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
            <div key={data.book} className="styleFont">
              <hr />
              <div
                style={{
                  display: "flex",

                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "200px",
                    width: "100%",
                    fontWeight: "600",
                  }}
                >
                  {data.user}
                </div>
                <div>
                  <div style={{fontSize:"12px"}}>
                    Rating: {data.rating} • On {data.date}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "5px",
                    }}
                  >
                    {data.title}{" "}
                  </div>
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
