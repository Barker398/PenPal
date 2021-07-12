import { letterForm } from "./letterForm.js"

const mainContainer = document.querySelector("#container")

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

