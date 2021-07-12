// Asking the API for the requests
const API = "http://localhost:8088"

const applicationState = {
    letters:[]
}

const mainContainer = document.querySelector('#container')

//Post new letters


export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const fetchLetters = () => {
    const fetchLetter = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(letter)
    }

    return fetch(`${API}/letter`)
    .then(response => response.json())
    .then((letterResponses) => {
        applicationState.letters = letterResponses
       }
    )
}