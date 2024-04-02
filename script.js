
const searchcontainer = document.querySelector('.search-container') ;
const searchbox = document.querySelector('.search-box') ;
const searchbtn = document.getElementById('searchbtn');
const MovieInfoDisplay = document.querySelector('.movie-info');
const apikey = '5073b615';


async function display(keyword) {
    
    const url = `https://www.omdbapi.com/?t=${keyword}&apikey=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();

    // Clear previous movie info
    MovieInfoDisplay.innerHTML = '';

    // Check if data is returned successfully
    if (data.Response === "True") {

        // Create HTML elements to display movie information

        const title = document.createElement('h1');
        title.textContent = data.Title;
        title.style.color = 'black' ;

        const poster = document.createElement('img') ;
        poster.src = data.Poster

        const released = document.createElement('p');
        released.textContent = "Released: " + data.Released;

        const type = document.createElement('p');
        type.textContent = "Type: " + data.Type;

        const imdb = document.createElement('p');
        imdb.textContent = "IMDB Rating: " + data.imdbRating;

        const genre = document.createElement('p');
        genre.textContent = "Genre: " + data.Genre;

        const director = document.createElement('p');
        director.textContent = "Director: " + data.Director;

        const actors = document.createElement('p');
        actors.textContent = "Actors: " + data.Actors;
        
        const language = document.createElement('p');
        language.textContent = "Language: " + data.Language;

        const country = document.createElement('p');
        country.textContent = "Country: " + data.Country;

        const award = document.createElement('p');
        award.textContent = "Awards: " + data.Awards;

        const plot = document.createElement('p');
        plot.textContent = "Plot: " + data.Plot;

        // Append movie information to the movie info container

        MovieInfoDisplay.appendChild(title);
        MovieInfoDisplay.appendChild(poster);
        MovieInfoDisplay.appendChild(released);
        MovieInfoDisplay.appendChild(type);
        MovieInfoDisplay.appendChild(imdb);
        MovieInfoDisplay.appendChild(genre);
        MovieInfoDisplay.appendChild(director);
        MovieInfoDisplay.appendChild(actors);
        MovieInfoDisplay.appendChild(language);
        MovieInfoDisplay.appendChild(country);
        MovieInfoDisplay.appendChild(award);
        MovieInfoDisplay.appendChild(plot);



    } else {
        
        // If no movie found, display error message

        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Please enter a valid movie name!";
        errorMessage.style.textAlign = 'center';
        MovieInfoDisplay.appendChild(errorMessage);
        
    }
}

searchbtn.addEventListener('click' , (e) => {
    e.preventDefault() ;
    keyword = searchbox.value ;
    display(keyword) ;
});