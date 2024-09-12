fetch(
  "https:api.openweathermap.org/data/2.5/weather?lat=-23.5506507&lon=-46.6333824&appid=eb3652eed27688ff9437fbe7dd2e3ffa"
)
  .then((response) => response.json())
  .then((data) => console.log(data));


  