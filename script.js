const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('text');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const jokesText = document.getElementById('jokesText');

jokeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = firstNameInput.value || 'Chuck';
    
    const lastName = lastNameInput.value || 'Norris';
    const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    fetch(url)
        .then( res => {
            return res.json()
        }).then( data => {
            text.innerHTML = data.value.joke
        })
});