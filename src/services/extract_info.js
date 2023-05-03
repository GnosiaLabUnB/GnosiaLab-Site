import {BASE_URL} from './base.js'

export async function get_all_deposits() {
  return fetch(BASE_URL + '/api/deposit/', {
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


export async function get_all_collectors() {
  return fetch(BASE_URL + '/api/deposit/collectors/', {
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


export async function get_all_herbarium() {
  return fetch(BASE_URL + '/api/deposit/herbarium/', {
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


export async function get_all_collectors_names() {
  return fetch(BASE_URL + '/api/deposit/collectors_name/', {
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


export async function get_all_vegetation() {
  return fetch(BASE_URL + '/api/vegetation/', {
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



export async function get_all_origin() {
    return fetch(BASE_URL + '/api/extract_info/origin/', {
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


export async function get_all_taxonomic_sys() {
    return fetch(BASE_URL + '/api/extract_info/taxonomic_sys/', {
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



export async function get_all_soil() {
    return fetch(BASE_URL + '/api/extract_info/soil/', {
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



export async function get_all_extract_method() {
    return fetch(BASE_URL + '/api/extract_info/extract_method/', {
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

export async function get_all_extracts() {
  return fetch(BASE_URL + '/api/extract_info/extract_type/', {
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

export async function get_all_addresses() {
    return fetch(BASE_URL + '/api/address/', {
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

export async function get_all_cities() {
  return fetch(BASE_URL + '/api/address/city/', {
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

export async function get_all_states() {
  return fetch(BASE_URL + '/api/address/state/', {
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

