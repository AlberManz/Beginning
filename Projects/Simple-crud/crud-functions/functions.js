// Creo una "mini base de datos" ya que no dispongo de una y el objetivo es desarrollar un "CRUD" básico
const allMovies = [
  { id: 1, movie: 'Cinema Paradiso' },
  { id: 2, movie: 'Leolo' },
  { id: 3, movie: 'El Padrino' }
]

let counterID = 3
const addMovie = () => {
  let newMovie
  do {
    newMovie = prompt('¿Qué película quieres añadir a la lista?')
  } while (newMovie === null || newMovie.trim() === '' || isNaN(newMovie === false))

  counterID++
  const addMovie = {
    id: counterID,
    movie: newMovie
  }
  allMovies.push(addMovie)
  console.log(`La película "${newMovie}" ha sido añadida a la lista.`)
}

const readList = () => {
  console.clear()
  console.log('--- TU LISTA DE PELÍCULAS ---')
  for (const movie of allMovies) {
    console.log(`${movie.id}: ${movie.movie}`)
  }
}

const updateList = () => {
  readList()

  let updateID
  do {
    updateID = prompt('Dime el id de la película que borrar.')
  } while (updateID === null || updateID.trim() === '' || isNaN(updateID) === true)
  updateID = Number(updateID)

  let isFound = false
  for (const index in allMovies) {
    if (updateID === allMovies[index].id) {
      let updatedMovie
      do {
        updatedMovie = prompt('Introduce el título de la película para actualizar el id en la lista')
      } while (updatedMovie === null || updatedMovie.trim() === '' || isNaN(updatedMovie === false))

      console.log(`La película "${allMovies[index].movie}" ha sido sustituida por "${updatedMovie}".`)

      allMovies[index].movie = updatedMovie

      isFound = true
    }
  }
  if (isFound === false) {
    console.error(`No existe ninguna película con el id ${updateID}`)
  }
}

const deleteMovie = () => {
  readList()

  let deleteID
  do {
    deleteID = prompt('Introduce el ID de la película que quieres borrar.')
  } while (deleteID === null || deleteID.trim() === '' || isNaN(deleteID) === true)
  deleteID = Number(deleteID)

  let isFound = false

  for (let i = 0; i < allMovies.length; i++) {
    if (deleteID === allMovies[i].id) {
      console.log(`La película "${allMovies[i].movie} ha sido borrada correctamente.`)
      allMovies.splice(i, 1)
      isFound = true
    }
  }

  if (isFound === false) {
    console.error(`No existe ninguna película con el id: ${deleteID}`)
  }
}

export { addMovie, readList, updateList, deleteMovie }
