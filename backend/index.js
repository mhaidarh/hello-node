var request = require("request")

request("https://swapi.co/api/people/1", (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body)
  }
  console.log(body)
})
