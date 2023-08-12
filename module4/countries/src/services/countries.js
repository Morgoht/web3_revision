import axios from "axios"

const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const APICountries = {
    getAll
}

export default APICountries