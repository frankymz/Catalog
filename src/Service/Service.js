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
}

export default new Service();
