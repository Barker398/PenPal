import { letterForm } from "./letterForm.js"

const mainContainer = document.querySelector("#container")

//renders the letterForm function and puts it in the main container.
const render = () => {
  mainContainer.innerHTML = letterForm()
}


mainContainer.addEventListener(
  "stateChanged",
  CustomEvent => {
    render()
  }
)

render()

