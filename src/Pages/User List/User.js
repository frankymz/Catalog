import React, { useEffect } from "react";
import Title from "../../Components/General-Components/Navigation/Title";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserList() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const vari = process.env.REACT_APP_AUTH0_DOMAIN;
  useEffect(() => {
    // fetch user saved books
    // and let them delete their books
    console.log("user is", user);
    console.log("authenticated is ", isAuthenticated);
    console.log("isLoading is ", isLoading);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [vari]);

  if (isAuthenticated) {
    return (
      <div>
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
      </div>
    );
  }

  return (
    <React.Fragment>
      <Title title="User List" />
      <div
        style={{
          fontSize: "20px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "80px",
          marginBottom:"610px"
        }}
      >
        Log in or sign up to be able to write book reviews and save your
        favorite books!
      </div>
    </React.Fragment>
  );
}
