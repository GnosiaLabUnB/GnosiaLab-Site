import {BASE_URL} from 'src/services/base'

export async function login(email, password) {
    return fetch(BASE_URL + '/api/users/token',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        body: JSON.stringify(
            `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
        )
      })
      .then((response) => {
        return response.json()
      })
      .catch((error) => {
        console.log(error)
      })
}

export async function validate(token) {
  
  return fetch(BASE_URL + '/api/users/me',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}


export async function signup(name, lastname, email, password) {
  
  return fetch(BASE_URL + '/api/users/',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": email,
        "firstname": name,
        "lastname": lastname, 
        "hashed_password": password
      })
    })
    .then((response) => {
      if (!response.ok){
        return response.json()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function get_user(token) {
  
  return fetch(BASE_URL + '/api/users/me',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function get_all_user(token) {
  
  return fetch(BASE_URL + '/api/users/',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function get_all_invited(token) {
  
  return fetch(BASE_URL + '/api/users/invited/',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}


export async function invite_user(email, token) {
  
  console.log(email, token)

  return fetch(BASE_URL + '/api/users/invited/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        "email": email
      })
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    })
}

