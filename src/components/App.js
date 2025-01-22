// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        setDogImage(data.message);  // Set the dog image URL in state
        setLoading(false);  // Set loading to false since image is loaded
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false);  // In case of error, stop the loading state
      });
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>  // Show loading message while the image is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" />  // Display the dog image when loading is complete
      )}
    </div>
  );
}

export default App;
