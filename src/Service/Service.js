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
    return axios.get(rest_api + `/userSaves/${userid}`);
  }
  getUserSavedByUserAndBook(user, book) {
    return axios.get(rest_api + `/userSaved/${user}/${book}`);
  }
  postSavedBook(rand, userid, bookid) {
    return axios.post(rest_api + "/addUserSave", {
      id: rand,
      user: userid,
      book: bookid,
    });
  }
  deleteSavedBook(id) {
    return axios.delete(rest_api + `/deleteById/${id}`);
  }

  // usernames and passwords - not needed anymore
  getUserByPassword(password) {
    return axios.get(rest_api + `/findUser/${password}`);
  }
  postUser(user, pass) {
    return axios.post(rest_api + "/addUser", {
      username: user,
      password: pass,
    });
  }

  // user book reviews
  getReviewForBook(book) {
    return axios.get(rest_api + `/reviews/${book}`);
  }

  postReview(id, name, review, rate, bookid) {
    return axios.post(rest_api + "addReview", {
      reviewid: id,
      user: name,
      comment: review,
      rating: rate,
      book: bookid,
    });
  }
}

export default new Service();
