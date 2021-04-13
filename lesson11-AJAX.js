const url = 'http://www.omdbapi.com/swagger.json';
fetch(url)
  .then(function (response) {
    console.log(response);
  })
