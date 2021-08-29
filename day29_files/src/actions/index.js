const updatePlace=(place)=>{
    return{
        type: "UPDATE_PLACE",
        payload: place,
    }
}

const updatePlaceData=(place)=>{
    return (dispatch)=>{
            fetch(`https://api.weatherapi.com/v1/current.json?key=7670bfef9f8949609be181400212808&q=${place}`)
          .then(res=>res.json())
             .then(data=>{
               console.log(data);
                dispatch({
                    type:"UPDATE_PLACE_DATA",
                    payload:data,
                })
              })
    }
}


const toggleTheme=()=>{
    return{
        type: "TOGGLE_THEME",

    }
}

export {updatePlace,updatePlaceData,toggleTheme};