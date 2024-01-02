var name = 'cheetah'
const response = await fetch('https://api.api-ninjas.com/v1/animals?name=' + animalName + userInput, { headers: { 'X-API-Key': 'GqqCiwQvte5ny9ezN9xl18RywkDg1SQTRF430TA1' } }); const data = await response.json()
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalName + userInput,
    headers: { 'X-Api-Key': 'GqqCiwQvte5ny9ezN9xl18RywkDg1SQTRF430TA1'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});




let options = {
  method: 'GET',
  headers: { 'x-api-key': 'GqqCiwQvte5ny9ezN9xl18RywkDg1SQTRF430TA1' }
}

let url = 'https://api.api-ninjas.com/v1/animals?name='

fetch(url,options)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 




const apiKey = 'GqqCiwQvte5ny9ezN9xl18RywkDg1SQTRF430TA1';
const apiUrl = 'https://api.api-ninjas.com/v1/animals?name=';
const animalName = document.getElementById('animalInput');
const userInput = document.getElementById('submitButton');

function ANIMALlist(animalName) {
fetch (`https://api.api-ninjas.com/v1/animals?name= ${animalName}&apiKey=${apiKey}`)
.then (response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  } 
  return response.json();
       })
.then (data => { console.log(data);
               })
.then (data => { data.forEach(animal => {
  const markup = `<li>${animal.name}</li>`;
  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
});
               })
.catch(error => console.log(error));

 
}

function ANIMALlist(userInput) {

fetch(`https://api.api-ninjas.com/v1/animals?name= ${userInput}&apiKey=${apiKey}`)

.then(response => response.json())

.then(data => {

// Log the retrieved data

// Render the data in the way you want

})

.catch(error => console.log(error));

}
