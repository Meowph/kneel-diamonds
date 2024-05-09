// Set up the transient state data structure and provide initial values

//Are the properties supposed to be in string form (" ")? 
const transientState = {
  "metalId": 0,
  "sizeId": 0,
  "styleId": 0
}

  export const setMetalChoice = (chosenMetalId) => {
    transientState.metalId = chosenMetalId
    console.log("metalId:", transientState.metalId)
  }

  export const setSizeChoice = (chosenSizeId) => {
    transientState.sizeId = chosenSizeId
    console.log("sizeId:", transientState.sizeId)
  }

  export const setStyleChoice = (chosenStyleId) => {
    transientState.styleId = chosenStyleId
    console.log("styleId:", transientState.styleId)
  }


export const placeOrder = async () => {
  /*
      Add the required keys to the object below that are
      needed for a POST operation.
  */
      const postOptions = { //these 3 things need to be on the options object for every POST request 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
    
        },
    
        body: JSON.stringify(transientState) //converting JS to string
      }

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions) //stays GET request until postOptions is added as the 2nd argument

}