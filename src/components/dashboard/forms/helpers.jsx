import { API_PATHS, create_item, get_all } from 'src/services/base';
import * as shared from 'src/services/shared';


export function selectStyle(select_name, touched, errors) {
        
    function proper_color(baseStyles, state) {return state.isFocused ? '' : touched[select_name] ? !!errors[select_name] ? 'var(--bs-danger)' : 'var(--bs-success)' : baseStyles.color}

    function proper_border_color(baseStyles, state) { return state.isFocused ? '' : touched[select_name] ? !!errors[select_name] ? 'var(--bs-danger)' : 'var(--bs-success)' : baseStyles.borderColor}

    return (
        {
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: proper_border_color(baseStyles, state)
            }),
            dropdownIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: proper_color(baseStyles, state)
            }),
            clearIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: proper_color(baseStyles, state)
            }),
            indicatorSeparator: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: proper_color(baseStyles, state)
            }),
          }
    )
}

export function selectClassName(name, touched, errors) {
    return touched[name] ? !!errors[name] ? 'is-invalid' : 'is-valid' : ''
}

export const form_group_classname = "position-relative mb-3";

export async function create_entity(inputValue, path, token) {

    let body = {}
    let field = ""
    if (path === API_PATHS.plant_organ) {
        body = {
            "organ": inputValue
        }
        field = "organ"
    } else if (path === API_PATHS.plant_species) {
        body = {
            "description": inputValue[0],
            "curr_taxo_name": inputValue[0],
            "family_id": inputValue[1]
        }
        field = "description"
    } else {
        body = {
            "description": inputValue
        }
        field = "description"
    }
    console.log(body)
    const response = await create_item(path, body, token)
    if (response.ok) {
        let res = await response.json()
        return {
            value: res.id,
            label: res[field]
        } 
    }
}

export async function get_options(path, entity) {
    let entity_json = await get_all(path)
    let options = entity_json.map(shared.opt_creator)

    let option_index = 0
    options.forEach(function (item, index) {
        if (item.value === entity?.id) {
            option_index = index
        }
    });

    return [options, options[option_index]]
}