// Set up the transient state data structure and provide initial values
const transientState = {
  "styles": false,
  "sizes": 0,
  "metals": ,
  "orders": 

}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
  transientState.ownsBlueJeans = chosenOwnership
  console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => { //POST goes here since transientState is being stored & is inly accessible to this module 
  transientState.socioLocationId= chosenLocation
  console.log(transientState)
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {

  const postOptions = { //these 3 things need to be on the options object for every POST request 
    method: "POST",
    headers: {
      "Content-Type": "application/json"

    },

    body: JSON.stringify(transientState) //converting JS to string
  }

const response = await fetch("http://localhost:8088/submissions", postOptions) //stays GET request until postOptions is added as the 2nd argument

const customEvent = new CustomEvent("newSubmissionCreated")
document.dispatchEvent(customEvent)
} 