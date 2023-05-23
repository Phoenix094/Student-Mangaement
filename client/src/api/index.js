import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });


export const addData = (data) => API.post('/addData', data);
export const updateData = (data, id) => API.patch(`/edit/${id}`, data);
export const deleteData = (id) => API.delete(`/data/${id}`);