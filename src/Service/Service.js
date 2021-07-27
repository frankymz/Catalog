import axios from "axios";

const rest_api = "http://localhost:8090";

class Service {
  getBooks() {
    return axios.get(rest_api + "/books");
  }
  getBooksByGenre(genre) {
    return axios.get(rest_api + `/books/${genre}`);
  }
  getBookById(id) {
    return axios.get(rest_api + `/bookById/${id}`);
  }
  // user saved books
  getUserSavedBooks(userid) {
    // works
    return axios.get(rest_api + `/userSaves/${userid}`);
  }
  getUserSavedByUserAndBook(user, book) {
    return axios.get(rest_api + `/userSaved/${user}/${book}`);
  }
  postSavedBook(rand, userid, bookid) {
    // works
    return axios.post(rest_api + "/addUserSave", {
      id: rand,
      user: userid,
      book: bookid,
    });
  }
  deleteSavedBook(id) {
    // works, but uses save id
    return axios.delete(rest_api + `/deleteById/${id}`);
  }

  // usernames and passwords
  getUserByPassword(password) {
    // not needed
    return axios.get(rest_api + `/findUser/${password}`);
  }
  postUser(user, pass) {
    // not needed
    return axios.post(rest_api + "/addUser", {
      username: user,
      password: pass,
    });
  }
}

export default new Service();
