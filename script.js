const searchcontainer = document.querySelector('.search-container');
const searchbox = document.querySelector('.search-box');
const searchbtn = document.getElementById('searchbtn');
const MovieInfoDisplay = document.querySelector('.movie-info');
const apikey = '5073b615';

async function display(keyword) {
    const url = `https://www.omdbapi.com/?t=${keyword}&apikey=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();

    // Clear previous movie info
    MovieInfoDisplay.innerHTML = '';

    if (data.Response === "True") {
        const elements = [
            { tag: 'h1', text: data.Title, style: { color: 'black' } },
            { tag: 'img', src: data.Poster },
            { tag: 'p', text: `Released: ${data.Released}` },
            { tag: 'p', text: `Type: ${data.Type}` },
            { tag: 'p', text: `IMDB Rating: ${data.imdbRating}` },
            { tag: 'p', text: `Genre: ${data.Genre}` },
            { tag: 'p', text: `Director: ${data.Director}` },
            { tag: 'p', text: `Actors: ${data.Actors}` },
            { tag: 'p', text: `Language: ${data.Language}` },
            { tag: 'p', text: `Country: ${data.Country}` },
            { tag: 'p', text: `Awards: ${data.Awards}` },
            { tag: 'p', text: `Plot: ${data.Plot}` }
        ];

        elements.forEach(element => {
            const Newelement = document.createElement(element.tag);
            if (element.text) Newelement.textContent = element.text;
            if (element.src) Newelement.src = element.src;
            if (element.style) Object.assign(Newelement.style, element.style);
            MovieInfoDisplay.appendChild(Newelement);
        });
    } else {
        // If no movie found, display error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Please enter a valid movie name!";
        errorMessage.style.textAlign = 'center';
        MovieInfoDisplay.appendChild(errorMessage);
    }
}


searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const keyword = searchbox.value;
    display(keyword);
});
