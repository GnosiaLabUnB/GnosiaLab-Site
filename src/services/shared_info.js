import { BASE_URL } from "./base"

export async function get_all_solvents() {
    return fetch(BASE_URL + '/api/shared/solvent/', {
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

export async function get_all_plant_organ() {
    return fetch(BASE_URL + '/api/shared/plant_organ/', {
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

export async function get_all_plant_family() {
    return fetch(BASE_URL + '/api/shared/plant_family/', {
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

export async function get_all_plant_species() {
  return fetch(BASE_URL + '/api/shared/plant_species/', {
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

export async function get_all_box() {
  return fetch(BASE_URL + '/api/shared/storage/box', {
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


export async function get_all_freezer() {
  return fetch(BASE_URL + '/api/shared/storage/freezer', {
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


