'use strict';

function getUserInfo() {

  let url1 = "https://api.github.com/users/";
  let url2 = "/repos";
  let username = $('#js-username-id').val();
  const searchURL = url1 + username + url2;

    fetch(searchURL)
    .then(( (response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }))
    .then(responseJson => displayResults(responseJson))

  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });

}

function displayResults(responseJson) {

  $('#js-search-results, #js-error-message').empty();
  console.log(responseJson);
  for (let i = 0; i < responseJson.length; i++) {
    $('#js-search-results').append(
      `<li><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></li>`
    )
  } 
  $('#js-search-results').removeClass('hidden');
}

function watchForm() {
  $('#js-search-form').submit(event => {
    event.preventDefault();
    const username = $('#js-username-id').val();
    getUserInfo(username);
  });
}

$(watchForm);
