import axios from 'axios';

let url = 'http://localhost:5000';

export function getProducts(){
    return axios.get(`${url}/products`)
        .then(response => response.data)
}

export function getLaptops(){
    return axios.get(`${url}/laptops`)
        .then(response => response.data)
}