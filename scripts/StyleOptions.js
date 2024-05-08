export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles")

  // Fill in the rest
  const styles = await response.json()

  // Iterate the submissions and create some <section> representations
  let stylesHTML = "<h2>Styles</h2> "
  

  // Use map() to generate new array of strings
  const styleStringArray = styles.map (
    (style) => {
      return `<div>
      <input type='radio' name='style' value='${style.id}'/> ${style.style}
      </div>`
    }  
  
  )

  // This function needs to return a single string, not an array of strings
stylesHTML += styleStringArray.join(" ")

  // Return the HTML string
  return stylesHTML
}