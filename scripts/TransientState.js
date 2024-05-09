// Set up the transient state data structure and provide initial values
const transientState = {
  "style": " ",
  "carets": " ",
  "metal": " ",
  "price": 0
}

export const setMetalChoice = (chosenMetal) => {
  transientState.metal = chosenMetal
  console.log(transientState)
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