import axios from 'axios';

const rest_api = "http://localhost:8090"


class Service {
    getProducts(){
        return axios.get(rest_api +'/products');
    }
}

export default new Service();