import { BASE_URL } from "./base"

export async function get_all_growth_medium() {
    return fetch(BASE_URL + '/api/fungi_info/growth_medium/', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function get_all_growth_condition() {
    return fetch(BASE_URL + '/api/fungi_info/growth_condition/', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}


export async function get_all_origin_matrix() {
    return fetch(BASE_URL + '/api/fungi_info/origin_matrix/', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function get_all_locations() {
    return fetch(BASE_URL + '/api/geolocation/', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}
