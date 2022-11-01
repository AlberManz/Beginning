import { addMovie, readList, updateList, deleteMovie } from './crud-functions/functions.js'
// Crear un menu (prompt) con diferentes opciones

let menu

do {
  menu = prompt(`¡Bienvendx a tu videoclub personal 1.0!
¿Qué quieres hacer?
  
  (c) Añadir una nueva película a la lista
  (r) Revisar la lista de películas
  (u) Actualizar la lista
  (d) Borrar película
  
  (x) Salir`)

  if (menu === 'c') {
    addMovie()
  } else if (menu === 'r') {
    readList()
  } else if (menu === 'u') {
    updateList()
  } else if (menu === 'd') {
    deleteMovie()
  } else if (menu === 'x' || menu === null) {
    console.log('BYE BYE 👋')
  } else {
    console.error('No has seleccionado una de las opciones indicadas')
  }
} while (menu !== 'x' && menu !== null)
