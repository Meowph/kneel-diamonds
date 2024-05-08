export const MetalOptions = async () => {

  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/metals")
  const metals = await response.json()

  // Iterate the submissions and create some <section> representations
  let metalsHTML = "<h2>Metals</h2>"

   // Use map() to generate new array of strings
  const metalStringArray = metals.map(
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