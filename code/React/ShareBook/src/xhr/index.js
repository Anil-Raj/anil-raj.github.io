import axios from 'axios'

let url = 'http://localhost:29607/api/Image/'
let getBooks = function() {
  return axios.get(url)
}

let getBook = function(id) {
  return axios.get(url + id)
}

export { getBooks, getBook }
