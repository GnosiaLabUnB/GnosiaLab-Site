export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : ''

export async function get_all(api_path) {
    return fetch(BASE_URL + api_path, {
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

export async function delete_item(api_path, item_id, token) {
    console.log(BASE_URL + api_path + item_id)
    return fetch(BASE_URL + api_path + item_id,
    {
        method: 'DELETE',
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


export const API_PATHS = {
    deposit: '/api/deposit',
    collectors: '/api/deposit/collectors/',
    herbarium: '/api/deposit/herbarium/',
    collectors_names: '/api/deposit/collectors_name/',
    vegetation: '/api/vegetation/',
    origin: '/api/extract_info/origin/',
    taxo_sys: '/api/extract_info/taxonomic_sys/',
    soil: '/api/extract_info/soil/',
    extract_method: '/api/extract_info/extract_method/',
    extract_type: '/api/extract_info/extract_type/',
    address: '/api/address/',
    city: '/api/address/city/',
    state: '/api/address/state/',
    growth_medium: '/api/fungi_info/growth_medium/',
    growth_condition: '/api/fungi_info/growth_condition/',
    origin_matrix: '/api/fungi_info/origin_matrix/',
    treatments: '/api/myco_info/treatment/',
    organisms: '/api/myco_info/organism/',
    organism_type: '/api/myco_info/organism_type/',
    name_lab: '/api/myco_info/name_lab/',
    nomeclature: '/api/myco_info/nomeclature/',
    geolocation: '/api/geolocation/',
    solvent: '/api/shared/solvent/',
    plant_organ: '/api/shared/plant_organ/',
    plant_family: '/api/shared/plant_family/',
    plant_species: '/api/shared/plant_species/',
    box: '/api/shared/storage/box/',
    freezer: '/api/shared/storage/freezer/',
    taxonomy_lvl: '/api/fungi_taxonomy/',
    fungi_class: '/api/fungi_taxonomy/class/',
    fungi_order: '/api/fungi_taxonomy/order/',
    fungi_family: '/api/fungi_taxonomy/family/',
    fungi_genus: '/api/fungi_taxonomy/genus/',
    fungi_species: '/api/fungi_taxonomy/species/',
    myco: '/api/mycotheque/',
    fungi: '/api/fungus/',
    plant_extract: '/api/extract/'
}


