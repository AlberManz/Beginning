import { addTeam, readList, updateList, deleteTeam } from './crud-functions/functions.js'

let menuNBA
do {
  menuNBA = prompt(`!Bienvenidx a tu lista de equipos NBA!
  La NBA es muy cambiante, dinos qué quieres hacer:
  (c) Añadir equipo favorito
  (r) Leer tu lista de equipos
  (u) Actualizar la lista
  (d) Borrar un equipo de la lista
  
  (x) Salir`)

  if (menuNBA === 'c') {
    addTeam()
  } else if (menuNBA === 'r') {
    readList()
  } else if (menuNBA === 'u') {
    updateList()
  } else if (menuNBA === 'd') {
    deleteTeam()
  } else if (menuNBA === 'x' || menuNBA === null) {
    console.log('SEE YOU WHERE AMAZING HAPPENS🏀')
  } else {
    console.error('No has seleccionado una opción correcta')
  }
} while (menuNBA !== 'x' && menuNBA !== null)
