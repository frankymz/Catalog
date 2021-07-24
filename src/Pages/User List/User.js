import React from "react";
import Title from "../../Components/General-Components/Navigation/Title";

export default function UserList() {
  // maybe userParams and get the id to get the username
  // Also with the id, you will get the user lists

  // if there is no userid in the useParams then display
  // a message that tells the user to login
  return (
    <React.Fragment>
      <Title title="frankybobs List" />
      <div></div>
    </React.Fragment>
  );
}
