
export async function get_all_taxonomy_lvls() {
    return fetch('http://localhost:8000/api/taxonomic_level/', {
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
    return fetch('http://localhost:8000/api/fungus_class/', {
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
