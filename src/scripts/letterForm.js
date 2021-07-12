import { letterList } from './letterList.js'


export const letterForm = () => {
    return `
      <h1>Pen Pal Society</h1>
      <section class="letterList">
      ${letterList()}
      </section>
      <button class="button" id="sendLetter">Send</button>
      

    `

}
