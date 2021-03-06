import React, { useEffect, useState } from "react";
import "./Modal.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import Service from "../../../API/Service";
import { useParams } from "react-router";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-150px);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 1);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

export default function Modal({ modal, setModal }) {
  const { user, isAuthenticated } = useAuth0();
  let { bookid } = useParams();

  const [review, setReview] = useState({
    reviewid: "",
    comment: "",
    rating: "",
    book: bookid,
    title: "",
    cover: "",
  });

  useEffect(() => {
    Service.getBookById(bookid).then((res) => {
      setReview({
        ...review,
        cover: `${res.data.cover}`,
        reviewid: Math.floor(Math.random() * 1000000) + 1,
      });
    });
  }, []);

  function handleSubmit() {
    if (review.title !== "" && review.rating !== "" && review.comment !== "") {
      Service.postReview(
        review.reviewid,
        user.nickname,
        review.comment,
        review.rating,
        review.book,
        review.title,
        review.cover
      );
      setModal((prev) => !prev);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }

  return (
    <React.Fragment>
      {modal && isAuthenticated ? (
        <Background>
          <ModalWrapper>
            <div style={{ display: "flex", padding: "35px" }}>
              <div style={{ margin: "auto", justifyContent: "center" }}>
                <div
                  className="font"
                  style={{
                    textAlign: "center",
                    color: "#636363",
                    fontSize: "26px",
                  }}
                >
                  Write a Review
                </div>

                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                  <input
                    type="text"
                    size="25"
                    placeholder="Title"
                    className="input"
                    onChange={(e) =>
                      setReview({ ...review, title: e.target.value })
                    }
                  />
                </div>
                <div style={{ marginBottom: "20px" }} className="select">
                  <select
                    onChange={(e) =>
                      setReview({ ...review, rating: e.target.value })
                    }
                  >
                    <option value="0">Rate this book</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Write review here..."
                    className="input ar"
                    rows="7"
                    cols="27"
                    onChange={(e) =>
                      setReview({ ...review, comment: e.target.value })
                    }
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div>
                    <button
                      style={{ background: " 	#0096FF", color: "white " }}
                      className="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
}
