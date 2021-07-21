import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

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
