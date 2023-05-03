import { BASE_URL } from "./base"

export async function search_all(schema) {
  
    let search_params = {
        search_id: schema.search_id,
        solvent_id: schema.solvent?.value,
        plant_organ_id: schema.plant_organ?.value,
        plant_family_id: schema.plant_family?.value,
        plant_species_id: schema.plant_species?.value,
    }
  
    for (let param in search_params) { 
      if (search_params[param] === undefined 
        || search_params[param] === null 
        || search_params[param] === ""
      ) {    
        delete search_params[param];
      }
    } 
  
    return fetch(BASE_URL + '/api/search/all?' +
      new URLSearchParams(search_params),
      {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((error) => {
        console.log(error)
      })
}


export async function search_extract(schema) {
  
    
    let search_params = {
        internal_id: schema.search_id,
        solvent_id: schema.solvent?.value,
        extraction_method_id: schema.extract_method?.value,
        vegetation_id: schema.veg_type?.value,
        city_id: schema.city?.value,
        state_id: schema.state?.value,
        plant_organ_id: schema.plant_organ?.value,
        plant_family_id: schema.plant_family?.value,
        plant_species_id: schema.plant_species?.value,
        deposit_id: schema.deposit_number?.value,
        collector_id: schema.collector_number?.value,
        herbarium_id: schema.herbarium?.value,
        collector_name_id: schema.collector_name?.value,
        compound_name: schema.compound_name?.value,
        smile: schema.smile?.value
    }
  
    for (let param in search_params) { 
      if (search_params[param] === undefined 
        || search_params[param] === null 
        || search_params[param] === ""
      ) {    
        delete search_params[param];
      }
    } 
  
    return fetch(BASE_URL + '/api/search/plant?' +
      new URLSearchParams(search_params),
      {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((error) => {
        console.log(error)
      })
}


export async function search_microorgs(schema) {
  
    let search_params = {
      fungus_id: schema.search_id,
      myco_id: schema.id_myco,
      plant_organ_id: schema.plant_organ?.value,
      growth_medium_id: schema.growth_medium?.value,
      solvent_id: schema.solvent?.value,
      origin_matrix_id: schema.origin_matrix?.value
    }
  
    for (let param in search_params) { 
      if (search_params[param] === undefined 
        || search_params[param] === null 
        || search_params[param] === ""
      ) {    
        delete search_params[param];
      }
    } 
  
    return fetch(BASE_URL + '/api/search/fungus?' +
      new URLSearchParams(search_params),
      {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((error) => {
        console.log(error)
      })
}


export async function search_myco(schema) {
  
    let search_params = {
        myco_id: schema.search_id ,
        sci_name_id: schema.scientific_name?.value ,
        organism_id: schema.organism?.value ,
        organism_type_id: schema.organism_type?.value ,
        tax_lvl_id: schema.taxo_lvl?.value ,
        f_class_id: schema.fungus_class?.value ,
        f_order_id: schema.fungus_order?.value ,
        f_family_id: schema.fungus_family?.value ,
        f_genus_id: schema.fungus_genus?.value ,
        f_species_id: schema.fungus_species?.value ,
        p_organ_id: schema.plant_organ?.value ,
        p_family_id: schema.plant_family?.value ,
        p_species_id: schema.plant_species?.value 
    }
  
    for (let param in search_params) { 
      if (search_params[param] === undefined 
        || search_params[param] === null 
        || search_params[param] === ""
      ) {    
        delete search_params[param];
      }
    } 
  
    return fetch(BASE_URL + '/api/search/myco?' +
      new URLSearchParams(search_params),
      {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((error) => {
        console.log(error)
      })
}