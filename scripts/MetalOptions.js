// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./TransientState.js"


export const MetalOptions = async () => {

  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/metals")
  const metals = await response.json()

  const handleMetalChoice = (clickEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (clickEvent.target.name === "metal") {
        
        setMetalChoice(parseInt(clickEvent.target.value)) 
    }
}

  document.addEventListener("change", handleMetalChoice)

  // Iterate the submissions and create some <section> representations
  let metalsHTML = " " //This title is from main.js 

   // Use map() to generate new array of strings

   //DRY code - Do Not Repeat yourself
  const metalStringArray = await metals.map(
    (metal) => {
      return `<div>
        <input type='radio' name='metal' value='${metal.id}'/> ${metal.metal}
      </div>`
  }

)

// This function needs to return a single string, not an array of strings
metalsHTML += metalStringArray.join(" ")

  // Return the HTML string
  return metalsHTML
}