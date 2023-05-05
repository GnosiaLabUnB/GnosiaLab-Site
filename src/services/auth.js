import {BASE_URL} from './base.js'

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
