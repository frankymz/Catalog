import React, { useEffect, useState } from "react";
import Title from "../../Components/General-Components/Navigation/Title";
import { useAuth0 } from "@auth0/auth0-react";
import Service from "../../Service/Service";

const bookArray = [];

export default function UserList() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [savedBooks, setSavedBooks] = useState({
    saved: [],
  });
  const [savedBookInfo, setSavedBookInfo] = useState({
    books: [],
  });
  const [loading, setLoading] = useState(true);

  async function getBooks() {
    if (isAuthenticated) {
      Service.getUserSavedBooks(user.nickname).then((response) => {
        setSavedBooks({ saved: response.data });
      });
    }
  }

  async function getBookInfo() {
    for (const element of savedBooks.saved) {
      await Service.getBookById(element.book).then((res2) => {
        bookArray.push(res2.data);
      });
    }

    setSavedBookInfo({ books: bookArray });
    console.log("end of function", savedBookInfo);
  }

  useEffect(() => {
    getBooks().then(getBookInfo());
  }, [isAuthenticated]);

  useEffect(() => {
    setLoading(false);
    console.log(savedBookInfo);
  }, [savedBookInfo]);

  if (loading || !isAuthenticated) {
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
            Log in or sign up to be able to write book reviews and save your
            favorite books!
          </div>{" "}
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Title title={`${user.nickname}'s List`} />
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <button
        onClick={() => {
          console.log(savedBookInfo);
        }}
      >
        console
      </button>

      {savedBookInfo.books.map((data) => (
        <div>{data.name}</div>
      ))}
      <div></div>
    </React.Fragment>
  );
}
