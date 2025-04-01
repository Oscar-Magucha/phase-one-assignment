// Add an event listener to a button to change text on click
document.querySelector('button').addEventListener('click', function() {
  document.querySelector('p').textContent = 'Button was clicked!';
});
// Fetch data from the server
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process and display the data
  })
  .catch(error => console.error('Error fetching data:', error));
// Sending data to the server via POST
const postData = { title: 'foo', body: 'bar', userId: 1 };

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
