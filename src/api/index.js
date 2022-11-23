import axios from 'axios';



const url = axios.create({baseURL: "http://localhost:5400"});

url.defaults.withCredentials = true;




export const fetchAll = () => url.get('/allPharmacy');