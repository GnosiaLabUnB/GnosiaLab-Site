
export async function get_all_deposits() {
  return fetch('http://localhost:8000/api/deposit/', {
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
  return fetch('http://localhost:8000/api/deposit/collectors/', {
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
  return fetch('http://localhost:8000/api/deposit/herbarium/', {
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
  return fetch('http://localhost:8000/api/deposit/collectors_name/', {
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
  return fetch('http://localhost:8000/api/vegetation/', {
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
    return fetch('http://localhost:8000/api/origin/', {
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
    return fetch('http://localhost:8000/api/taxonomic_sys/', {
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
    return fetch('http://localhost:8000/api/soil/', {
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
    return fetch('http://localhost:8000/api/extract_method/', {
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
    return fetch('http://localhost:8000/api/address/', {
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
  return fetch('http://localhost:8000/api/address/city/', {
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
  return fetch('http://localhost:8000/api/address/state/', {
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