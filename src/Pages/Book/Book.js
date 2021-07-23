import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Cover from "../../Components/Book-Components/BookCover/Cover";
import Description from "../../Components/Book-Components/BookDescription/Description";
import Title from "../../Components/General-Components/Navigation/Title";
/*
Search for book by using the id.
Output image, description, price
*/
const image =
  "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg";
export default function Book() {
  let { bookid } = useParams();
  return (
    <React.Fragment>
      <Title title="A Beginner's Guide to Japan: Observations and Provocations" />
      Book id: {bookid}
      <div
        style={{
          margin: "auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "900px",
        }}
      >
        <div style={{ position: "relative" }}>
          <Cover />
        </div>
        <div style={{ marginLeft: "150px" }}>
          <Description />
          <div style={{marginTop:"25px"}}>
            <button>Save to your list</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
