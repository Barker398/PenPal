import { letterList } from './letterList.js'


export const letterForm = () => {
    return `
      <h1>Pen Pal Society</h1>
      <section class="letterList">
      ${letterList()}
      </section>
      <h2>Letters saved</h2>

    `

}
