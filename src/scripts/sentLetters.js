//. map out letters and return the saved state of the letter, convert to html.
import { getLetters } from "./dataAccess.js"

export const letterRequest = () => {

    const letters = getLetters()

    let html = '<ul>'

    html += letters.map(letter =>{
        return `<li> ${letter.authorName} ${letter.recipientName} ${letter.dateSent} ${letter.authorEmail} ${letter.topic}</li>`

    }
    ).join('')

    html += '</ul>'

    return html
}