import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObj) => {
  const request = axios.post(baseUrl, newObj)
  return request.then(response => response.data)
}

// Idk if i really need this stuff
const deleteNum = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};


export default {getAll, create, deleteNum, update}
