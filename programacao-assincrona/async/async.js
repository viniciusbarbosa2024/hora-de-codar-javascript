//Simplifica aas chamadas de API

//Método padrão (Usando Promises)

fetch(
    "https:api.openweathermap.org/data/2.5/weather?lat=-23.5506507&lon=-46.6333824&appid=eb3652eed27688ff9437fbe7dd2e3ffa"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.main.temp))

  
//Usando async/await

 async function APIcall() {
     const response = await fetch(
         "https:api.openweathermap.org/data/2.5/weather?lat=-23.5506507&lon=-46.6333824&appid=eb3652eed27688ff9437fbe7dd2e3ffa"
       )

       const data = await response.json()
       const temp = data.main.temp 
       console.log(temp)

    
 }

 APIcall()

 //Fazer um exemplo maior