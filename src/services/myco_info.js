import { BASE_URL } from "./base"

export async function get_all_treatments() {
    return fetch(BASE_URL + '/api/myco_info/treatment/', {
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

export async function get_all_organisms() {
    return fetch(BASE_URL + '/api/myco_info/organism/', {
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

export async function get_all_organisms_type() {
  return fetch(BASE_URL + '/api/myco_info/organism_type/', {
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

export async function get_all_name_lab() {
    return fetch(BASE_URL + '/api/myco_info/name_lab/', {
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

export async function get_all_nomeclature() {
    return fetch(BASE_URL + '/api/myco_info/nomeclature/', {
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

export async function get_all_geolocation() {
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
