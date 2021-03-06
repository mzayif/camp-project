import axios from "axios"


export default class ProductService {
    getProducts(){
        return axios.get("http://localhost:8080/api/products/get-all");
    }

    getByProductName(productName){
        return axios.get(`http://localhost:8080/api/products/get-by-name?productName=${productName}`);
    }
}