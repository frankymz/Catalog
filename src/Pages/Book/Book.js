import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Title from "../../Components/General-Components/Navigation/Title";
import Service from "../../API/Service";
import "./Book.css";
import ReadMoreReact from "read-more-react";
import { useAuth0 } from "@auth0/auth0-react";
import BookReviews from "../../Components/Book-Components/BookReviews/BookReviews";
import Modal from "../../Components/General-Components/Navigation/Modal";
import Tooltip from "@material-ui/core/Tooltip";

export default function Book() {
  const { user, isAuthenticated } = useAuth0();
  let { bookid } = useParams();
  const [auth, setAuth] = useState(isAuthenticated);
  const [book, setBook] = useState({
    book: [],
  });
  const [alreadySaved, setAlreadySaved] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [tool, setTool] = useState(false);

  useEffect(() => {
    Service.getBookById(bookid).then((response) => {
      setBook({ book: response.data });
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      Service.getUserSavedByUserAndBook(user.nickname, bookid).then(
        (response) => {
          console.log(response);
          if (response.data != "") {
            setAlreadySaved(true);
          }
        }
      );
    }
  }, [auth]);

  function handleSave() {
    if (isAuthenticated && !alreadySaved) {
      Service.postSavedBook(
        Math.floor(Math.random() * 1000000) + 1,
        user.nickname,
        bookid
      );
      setAlreadySaved(true);
    } else if (!isAuthenticated && alreadySaved) {
      // Tell user to sign up to save to a list
      console.log("sign up pops");
    } else {
    }
  }

  const handleTooltipClose = () => {
    setTool(false);
  };

  function openModal() {
    setModal((prev) => !prev);
    if (!isAuthenticated) {
      setTool(true);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Modal modal={modal} setModal={setModal} />
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
          <div
            style={{
              marginTop: "25px",
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            {alreadySaved ? (
              <button className="saved"> Book is already saved! </button>
            ) : (
              <button
                className="saveButton"
                onClick={() => {
                  handleSave();
                }}
              >
                Save to your list
              </button>
            )}
            <div style={{ marginLeft: "40px", zIndex: "0.1" }}>
              {isAuthenticated ? (
                <button onClick={openModal} className="writebtn custom-btn">
                  Write a Review
                </button>
              ) : (
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  placement="top"
                  title="Sign in first"
                >
                  <button onClick={openModal} style={{cursor:"unset"}} className="writebtn custom-btn">
                    Write a Review
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "50px",
          margin: "auto",
          maxWidth: "950px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <hr />
        <div
          className="reviewTitle"
          style={{
            zIndex: "-1",
            textAlign: "center",
            fontSize: "25px",
            width: "400px",
          }}
        >
          Book Reviews
        </div>

        <hr />
      </div>

      <BookReviews />
    </React.Fragment>
  );
}
