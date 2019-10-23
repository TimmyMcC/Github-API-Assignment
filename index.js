'use strict';

/*const apiKey = '7a2b390df078d87eec3605ef6eec1a666e59d356';*/

const searchURL = `https://api.github.com/users/${username}/repos`;

function getUserInfo(username) {

  const searchURL = `https://api.github.com/users/${username}/repos`;
  fetch(searchURL)
  .then(response => response.json())
  .then(responseJson => {
    displayResults(responseJson);
  })
  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });

}

function displayResults() {

  $('#js-search-results, #js-error-message').empty();
  console.log(responseJson);
  $('#js-username').append(`${responseJson[0].owner.login}`).show();
    responseJson.forEach(repo => {
      $('#js-repos-list').append(
        `<li class="result">
            <a href="${repo.html_url}">${repo.name}</a>
        </li>`
      );
    });

  $('#js-search-results').removeClass('hidden');
}

function watchForm() {
  $('#js-search-form').submit(event => {
    event.preventDefault();
    const username = $('#js-username').val();
    getUserInfo(username);
  });
}

$(watchForm);