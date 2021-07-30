import React, { useEffect, useState } from "react";
import "./List.css";
import Service from "../../../API/Service";
import { useAuth0 } from "@auth0/auth0-react";

export default function RecentReviews() {
  const [reviews, setReviews] = useState({
    recent: [],
  });
  useEffect(() => {
    Service.getReviewsByDate().then((res) => {
      setReviews({
        recent: res.data,
      });
    });
  }, []);
  return (
    <React.Fragment>
      <div
        style={{
          maxWidth: "950px",
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
            Today's Book Reviews
          </div>
        </div>

        {reviews.recent.map((data) => (
          <div> </div>
        ))}
      </div>
    </React.Fragment>
  );
}
