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
      <input type="text" id="textarea" name="letter" class="input" />
      </section>
      </div>

      <div class="field>
      <section class="Topics">
      <h2>Topic</h2>

      <input type="checkbox" value="Business">
      <option value="Business">business<option/>

      <input type="checkbox" value="Family">
      <option value="Family">family<option/>

      <input type="checkbox" value="Congratulations>
      <option value="Congratulations">congratulations<option/>
     
      <input type="checkbox" value="Condolences">
      <opption value="Condolences">condolences<options/>

      </section>
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
      </div>
      `
      return html
}

