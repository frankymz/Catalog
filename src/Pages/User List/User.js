import React, { useEffect, useState } from "react";
import Title from "../../Components/General-Components/Navigation/Title";
import { useAuth0 } from "@auth0/auth0-react";
import Service from "../../API/Service";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link,
  useParams,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./User.css";

var bookArray = [];

export default function UserList() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [savedBooks, setSavedBooks] = useState({
    saved: [],
  });
  const [savedBookInfo, setSavedBookInfo] = useState({
    books: [],
  });
  const [loading, setLoading] = useState(true);
  var { nickname } = useParams();

  const location = useLocation();
  useEffect(() => {
    setSavedBooks({ saved: [] });
    setSavedBookInfo({ books: [] });
    bookArray = [];
  }, [location]);

  async function getBooks() {
    const response = await Service.getUserSavedBooks(nickname);
    setSavedBooks({ saved: response.data });
  }

  useEffect(() => {
    setLoading(true);
    getBooks();
  }, []);

  useEffect(() => {
    if (savedBooks.saved != []) {
      for (const element of savedBooks.saved) {
        Service.getBookById(element.book).then((res2) => {
          bookArray.push(res2.data);
        });
      }
      setSavedBookInfo({ books: bookArray });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [savedBooks]);

  if (nickname == undefined) {
    return (
      <div>
        <Title title="User List" />{" "}
        <div
          style={{
            fontSize: "20px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "80px",
            marginBottom: "610px",
          }}
        >
          Log in or sign up to be able to write book reviews and save your
          favorite books!
        </div>
      </div>
    );
  }

  function handleDelete(bookValue) {
    const obj = JSON.parse(bookValue.target.value);
    const book = obj.id;
    const name = obj.name;

    Service.getUserSavedByUserAndBook(name, book).then((response) => {
      const saveid = response.data.id;
      Service.deleteSavedBook(saveid).then((res) => {
        setTimeout(() => {
          window.location.reload();
        }, 300);
      });
    });
  }

  if (loading) {
    return (
      <React.Fragment>
        <div>
          <Title title="User List" />
          <div
            style={{
              fontSize: "20px",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              padding: "80px",
              marginBottom: "610px",
            }}
          >
            <ClipLoader color={"#30427C"} loading={loading} size={100} />
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Title title={`${nickname}'s Wish List`} />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "auto",
          paddingTop: "20px",
        }}
        className="font"
      >
        <div
          style={{
            marginRight: "25px",
            textAlign: "center",
            borderRight: "1px solid #d1d1d1",
            paddingRight: "25px",
            paddingLeft: "25px",
            paddingTop: "20px",
            maxWidth: "300px",
            width: "100%",
          }}
        >
          <div style={{ padding: "25px" }}>
            <img src={user.picture} alt={user.name} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div>Name: </div>
              <div>{user.name}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#f6f6f6",
              }}
            >
              <div>Email: </div>
              <div>{user.email}</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "600px", width: "100%" }}>
          {savedBookInfo.books.map((data, i) => (
            <div
              key={data.id}
              style={{
                display: "flex",
                padding: "10px",
                margin: "10px",
                lineHeight: "40px",
                borderBottom: "1px solid gray",
                borderRadius: "3px",
                maxWidth: "800px",
                justifyContent: "space-between",
              }}
              className="rowdiv"
            >
              <img
                src={data.cover}
                style={{ width: "100px", marginRight: "40px" }}
              />
              <div style={{ marginRight: "40px", textAlign:"left" }}>
                <div>{data.name}</div>
                <div>By {data.author} </div>
                <div>Average Rating: {data.avgRating} </div>
              </div>
              <div style={{ textAlign: "center", alignItems: "center" }}>
                <div style={{ margin: "20px" }}>
                  <Link to={`/book/${data.id}`} >
                    <button className="reviewbtn">Write a review</button>
                  </Link>
                </div>
                <div style={{ margin: "20px" }}>
                  <button
                    value={JSON.stringify({
                      id: `${data.id}`,
                      name: `${user.nickname}`,
                    })}
                    onClick={(e) => handleDelete(e)}
                    className="deletebtn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
