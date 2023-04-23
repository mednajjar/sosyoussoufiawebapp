import axios from 'axios';



const url = axios.create({ baseURL: "http://localhost:4500/api" });

export const fetchAll = async () => await url.get('/allPharmacy');
export const pharmacyOnDuty = async () => await url.get('/pharmacyOnDuty');
export const addPharmacy = async (data) => await url.post('/addPharmacy', data)