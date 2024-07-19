# React Movie Search Application

This is a React-based movie search application that fetches movie data from the Open Library API and displays random dog images for each movie card. It includes features such as searching for movies, displaying search results with random dog images, handling loading states, and displaying appropriate error messages.

## Features

- Search for movies using the Open Library API.
- Display random dog images for each movie card.
- Handle loading, error, and not-found states.
- Clear search input with a cancel icon.
- Responsive design for different screen sizes.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app

2. Install the dependencies:

   ```sh
   npm start

## Running the Application

Start the development server:

    npm start

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Components

### SearchBar
- Located in `src/components/SearchBar/index.js`.
- Allows users to input a movie name and search for it.
- Includes a cancel icon to clear the input field.
- Styles are defined in `src/components/SearchBar/index.css`.

### MovieCard
- Located in `src/components/MovieCard/index.js`.
- Displays movie details along with a random dog image.
- Styles are defined in `src/components/MovieCard/index.css`.

## API
- The application fetches movie data from the Open Library API.
- Random dog images are fetched from the Dog CEO API.

## Styling
- Global styles are defined in `src/App.css`.
- Component-specific styles are defined in their respective CSS files.

### App.css
- Handles the layout and styling of the main application.
- Includes styles for the loader, movie list, and error messages.

### SearchBar/index.css
- Styles the search bar, input field, and icons.

### MovieCard/index.css
- Styles the movie card component, including hover effects and layout adjustments.

## Responsive Design
- The application is responsive and adjusts the layout based on the screen size.
- Media queries are used to handle different breakpoints for better user experience on various devices.

## Deployment
- You can deploy this application using platforms like Netlify or Vercel. Follow their respective documentation for detailed instructions.

## Acknowledgements
- [Open Library API](https://openlibrary.org/developers/api) for providing movie data.
- [Dog CEO API](https://dog.ceo/dog-api/) for providing random dog images.
- [React](https://reactjs.org/) for the frontend framework.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


### Conclusion

This `README.md` provides a comprehensive guide to setting up, running, and understanding the React Movie Search Application. It covers all the necessary details, from installation to deployment, ensuring that users can easily get started with your project.
