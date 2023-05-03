import { BASE_URL } from "./base"

export async function get_all_taxonomy_lvls() {
    return fetch(BASE_URL + '/api/fungi_taxonomy/', {
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


export async function get_all_fungus_class() {
    return fetch(BASE_URL + '/api/fungi_taxonomy/class/', {
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

export async function get_all_fungus_order() {
  return fetch(BASE_URL + '/api/fungi_taxonomy/order/', {
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


export async function get_all_fungus_family() {
  return fetch(BASE_URL + '/api/fungi_taxonomy/family/', {
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


export async function get_all_fungus_genus() {
  return fetch(BASE_URL + '/api/fungi_taxonomy/genus/', {
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

export async function get_all_fungus_species() {
  return fetch(BASE_URL + '/api/fungi_taxonomy/species/', {
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
