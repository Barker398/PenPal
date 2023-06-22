//. map out letters and return the saved state of the letter, convert to html.
import { getLetters } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const letters = (letter) => {

    const letters = getLetters()

    let html = '<ul>'

    html += letters.map(letter => {
        return `<li> ${letter.authorName} ${letter.recipientName} ${letter.topic}</li>`

    }
    ).join('')

    html += '</ul>'

    return html
}


