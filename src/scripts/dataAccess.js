

// Asking the API for the requests
const API = "http://localhost:8088"

const applicationState = {
    letters: []
}

const mainContainer = document.querySelector('#container')

export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}

export const fetchLetters = () => {


    //Pulls all the information for the letter and returns a promise containing the response.
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then((letterResponses) => {
            applicationState.letters = letterResponses
        }
        )
}

//Post will send the info for letters and update the information.
export const sendRequest = (letterBody) => {
    const postConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterBody)
    }

    return fetch(`${API}/letters`, postConfig)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
        )
}