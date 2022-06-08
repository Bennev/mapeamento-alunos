import axios from 'axios'

const api = axios.create({
  baseURL: 'https://alunos-cotistas-api.herokuapp.com/'
})

export default api;