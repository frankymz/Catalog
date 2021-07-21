import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Category() {
  let { category } = useParams();
  return (
    <React.Fragment>
      <div style={{margin:"auto", display:"flex", justifyContent:"center"}}>Category of book: {category}</div>
    </React.Fragment>
  );
}
