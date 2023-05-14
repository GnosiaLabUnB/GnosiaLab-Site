
export function opt_creator_vegetation(v) {
  v = {
    value: v["id"],
    label: v["local"]
  };
  return v;
}


export function opt_creator_deposit_collector(v) {
  v = {
    value: v["id"],
    label: "Deposit: " + v.deposit["description"] + " Collector: " + v.collector["description"]
  };
  return v;
}

export function opt_creator(v) {
      v = {
        value: v["id"],
        label: v["description"][0].toUpperCase() + v["description"].substring(1)
      };
      return v;
}

export function opt_creator_address(v) {
    v = {
      value: v["id"],
      label: v["location"]
    };
    return v;
}


export function opt_creator_organ(v) {
    v = {
      value: v["id"],
      label: v["organ"][0].toUpperCase() + v["organ"].substring(1)
    };
    return v;
}


export function opt_creator_nomeclature(v) {
    v = {
      value: v["id"],
      label: v["scientific_name"][0].toUpperCase() + v["scientific_name"].substring(1)
    };
    return v;
}

export function search_dict(selected, json) {
    let id = selected.value
    console.log(id)
    for(var i=0; i< json.length ; i++){
        if(json[i].id === id){
            console.log(json[i])
            return json[i]
        }
    }
    console.log("Error")
}

export function opt_creator_geo(v) {
    v = {
      value: v["id"],
      label: "Lat: " + v["latitude"] + " Long: " + v["longitude"]
    };
    return v;
}