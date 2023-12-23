export let dataFake:any[] = []

fetch("https://ghibliapi.vercel.app/films")
.then(response => response.json())
.then(response => {
  response.map((e:any, i:number) => e.id = i+1)
  return response
})
.then(response => dataFake = response)
// .then(response => console.log(dataFake))




