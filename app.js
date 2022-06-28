
console.log(document.title)














// function array() {

// } senate.map( function (ar){
   
//    return ar.sort();
// }  )

// function asd(senate){

    

// }

// console.log(modifiedArr); 

// const names = beers.map(cerveza => {
// return {
//     name: cerveza.name,
//     tagline: cerveza.tagline,
    
// }

// } ) 
// console.log(names)

// -------no funciono
// function array(senate) {
// let todos = senate.map( senate => {
//   return {
//     party : senate.party,
//     last_name : senate.last_name,
//   }
// }

// )
// return {
//   party : senate.party,
//   last_name : senate.last_name,
// }
// }
// console.log(array(senate))
// console.log(todos)

// ----------------
// const result = senate
//   .map(({ first_name, lastname, party }) => ({
//     senate: `${first_name} ${lastname}`,
//     party,
//   }))
//   // .filter((student) => student.age > 20)
//   // .sort((a, b) => b.age - a.age)
//   // .reduce((total, student) => total + student.age, 0);

// console.log(result);

// const lista = document.getElementById('2')
// const table = document.getElementById('senate')


//  const senateNames = senate.results.map(function (student) {
//    return {
//      first_name: student.first_name ,
//      last_name :  student.last_name,
//    }
//  })
// console.log(senateNames)
// let nombres =[]
//  nombres = senate.results.map(name => name.members
//   .map(as=> 
//      as.first_name,
    
//        ) );
// console.log(nombres)

// // var foo = myArray.map(function(bar){
// //     return '<li>'+bar.marca+' '+bar.modelo+'</li>'
// //   })
// //   document.getElementById("foo").innerHTML = foo;
// //   <div id='foo'></div>

// // selectores
// const formulario = document.getElementById('formulario')
// const sectionPersonajes = document.getElementById('section-personajes')

// // variables
// const copiaPersonajes = Array.from(personajes).filter(personaje=> personaje.house)


// // ejecucion
// imprimirPersonajes(copiaPersonajes,sectionPersonajes)


// // eventListener

// formulario.addEventListener( 'change', (e)=>{
//  const filtrados = filtrarPersonajes(copiaPersonajes,e.target.value)
//  imprimirPersonajes(filtrados,sectionPersonajes)
// })


// //funciones
// function filtrarPersonajes(personajes,condicion){
//   const filtrados = personajes.filter( personaje => personaje.house === condicion )
//   return filtrados
// }

// function imprimirPersonajes(personajes,elemento){

//   elemento.innerHTML = ''

//   let fragment = document.createDocumentFragment()

//   personajes.forEach( personaje => {
//     let parrafo = document.createElement('P')
//     parrafo.textContent = ` ${personaje.name} - ${personaje.house} `
//     parrafo.classList = 'text-center text-danger'
//     fragment.appendChild(parrafo)
//   })

//   elemento.appendChild(fragment)
  
// }

// const arreglo = ['hola','hola','a','b','c','d','a','b','c','d']
// const sinRepetidos = Array.from( new Set(arreglo))
// console.log(sinRepetidos)


// const neww = document.getElementById(); 

// const mostrarData = (data)=>{
//   console.log(data)
//   let body = ''
//   for (let i=0; i < 17; i++) {
//       body += `<tr><td>${data[i].symbol}</td><td>USD ${data[i].price}</td></tr>`
//   }
//   document.getElementById('data').innerHTML = body
// }   


// function AllSenate(senate){
// let body = ''

// for( let i=0; i< senate.length ; i++){ 
// body+= `<tr>
// <td>${senate[i].last_name}</td>
// <td> ${senate[i].party}</td>
// <td> ${senate[i].state}</td>
// </tr>`
//  }
// document.getElementById('senate').innerHTML= body
// }
// console.log(AllSenate())
// AllSenate()