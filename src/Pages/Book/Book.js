import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Title from "../../Components/General-Components/Navigation/Title";
import Service from "../../Service/Service";
import "./Book.css";
import ReadMoreReact from "read-more-react";

const image =
  "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg";
export default function Book() {
  let { bookid } = useParams();
  const [book, setBook] = useState({
    book: [],
  });
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    Service.getBookById(bookid).then((response) => {
      setBook({ book: response.data });
      console.log(book);
      setLoading(false)
    });
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Title title={`${book.book.name}`} />
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
          <div>
            <img
              style={{
                position: "relative",
                zIndex: "-1",
                width: "250px",
                height: "auto",
              }}
              src={book.book.cover}
            />
          </div>
        </div>
        <div style={{ marginLeft: "150px" }}>
          <div className="title">{book.book.name}</div>
          <div style={{ fontFamily: "sans-serif", paddingBottom: "10px" }}>
            by {book.book.author}
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              borderBottom: "1px solid gray",
              paddingBottom: "20px",
            }}
          >
            Average rating: {book.book.avg_rating}
          </div>
          <div style={{ marginTop: "20px" }}>
            <ReadMoreReact
              text={JSON.stringify(book.book.description)}
              min={1}
              ideal={900}
              max={900}
              readMoreText="...read more"
            />
          </div>
          <div style={{ marginTop: "25px" }}>
            <button>Save to your list</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
