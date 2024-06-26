import { setSizeChoice } from "./TransientState.js"

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes")

  // Fill in the rest
  const sizes = await response.json()

  // Iterate the submissions and create some <section> representations
  let sizesHTML = " " //This title is from main.js 
  
  const handleSizeChoice = (clickEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (clickEvent.target.name === "size") {
        setSizeChoice(parseInt(clickEvent.target.value)) 
    }
}

document.addEventListener("change", handleSizeChoice)

  // Use map() to generate new array of strings
  const sizeStringArray = await sizes.map(
    (size) => { 
      return `<div>
    <input type='radio' name='size' value='${size.id}'/> ${size.carets}
    </div>`
  }
  
)    
  // This function needs to return a single string, not an array of strings
  sizesHTML += sizeStringArray.join(" ")

  // Return the HTML string
  return sizesHTML
  
}