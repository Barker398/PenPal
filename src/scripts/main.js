import { letterForm } from "./letterForm.js"
import { fetchLetters } from "./dataAccess.js"

//Returns the first element within the document that matches the specified selector.
const mainContainer = document.querySelector("#container")

//renders the letterForm function and puts it in the main container.
const render = () => {
  fetchLetters().then(
    () => {
      mainContainer.innerHTML = letterForm()
    }
  )
}


mainContainer.addEventListener(
  "stateChanged",
  CustomEvent => {
    render()
  }
)

render()

