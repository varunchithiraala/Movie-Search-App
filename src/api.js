// src/api.js
export const fetchMovies = async (query) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    return data.docs.map(movie => ({
      title: movie.title,
      author: movie.author_name ? movie.author_name[0] : 'Unknown',
      publicationDate: movie.first_publish_year || 'Unknown'
    }));
};

export const fetchRandomDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
};
