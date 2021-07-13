import { getLetters } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener
export const letterList= () => {
    const html = `
        <div class="field">
            <label class="label">Author</label>
            <select id="Author" class="select">
             <option value ="Sam">Sam Barker</option>
             <option value="Melody">Melody Barker</option>
             <option value="Faith">Faith Magras</option>
             </select>

      
      <div class="field">
      <section class=:"Letter">
      <h2>Letter</h2>
      <textarea id="textarea" name="letter" class="input"></textarea>
      </section>
      </div>

      <div class="field>
      <label class="label" for="Topics">Topics</label>
      <div id="topics" class="letterTopics">
      <input type="radio" name="topic" value="Business">Business</input>
      
      <input type="radio" name="topic" value="Family">Family</input>
      
      <input type="radio" name="topic" value="Congratulations">Congratulations</input>
      
      <input type="radio" name="topic" value="Condolences">Condolences</input>
      

        </div>
      </div>

      <div class="field">
      <section class="Recipients">
      <label class="label">Recipient</label>
      <select id="recipient" class="select">
      <option value="Joey Knight">Joey Knight</option>
      <option value="Melody Barker">Melody Barker</option>
      <option value="Danny Barker">Danny Barker</option>
      </select>
      </section>
      <button class="button" id="sendLetter">Send</button>
      </div>
      `
      return html
}

