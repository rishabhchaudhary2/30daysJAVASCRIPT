import axios from 'axios';

// Define the URL
const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// Make a GET request using axios
axios.get(url)
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('There has been a problem with your axios request:', error);
  });
