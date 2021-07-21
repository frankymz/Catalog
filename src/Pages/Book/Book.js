import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

/*
Search for book by using the id.
Output image, description, price
*/
export default function Book() {
  let { bookid } = useParams();
  return (
    <React.Fragment>
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        Book id: {bookid}
      </div>
    </React.Fragment>
  );
}
