import axios from "axios"

const baseUrl = `http://localhost:3001/notes`

const getAll = () => {
    const request =  axios.get(baseUrl)
    const noteNonExiting = {
        id: 10000,
        content: 'this note is not saved to server',
        date: '2019-05-30',
        important: true,
    }
    return request.then(response => response.data.concat(noteNonExiting))
}

const create = (newObject) => {
    const request =  axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((response) => {
        return response.data
    })
}

export default { getAll, create, update  }