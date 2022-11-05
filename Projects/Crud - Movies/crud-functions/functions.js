// Creo una "mini base de datos" ya que no dispongo de una y el objetivo es desarrollar un "CRUD" básico
const allMovies = [
  { id: 1, movie: 'Cinema Paradiso', isWatched: true },
  { id: 2, movie: 'Leolo', isWatched: false },
  { id: 3, movie: 'El Padrino', isWatched: true }
]

const getMovie = (mensaje = '¿Qué película quieres añadir a la lista?') => {
  let newMovie
  do {
    newMovie = prompt(mensaje)
  } while (newMovie === null || newMovie.trim() === '' || isNaN(newMovie === false))
  return newMovie
}

const getID = (mensaje = 'Introduce el ID') => {
  let ID
  do {
    ID = prompt(mensaje)
  } while (ID === null || ID.trim() === '' || isNaN(ID) === true)
  ID = Number(ID)
  return ID
}

let counterID = 3
const addMovie = () => {
  const newMovie = getMovie()

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
    const watchedIcon = movie.isWatched ? '👌' : '🍿'
    console.log(`${watchedIcon} - ${movie.id}: ${movie.movie}`)
  }
}

const updateList = () => {
  readList()

  const updateID = getID()

  let isFound = false
  for (const index in allMovies) {
    if (updateID === allMovies[index].id) {
      const updatedMovie = getMovie('Escribe el título de la película para actualizar')

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

  const deleteID = getID()

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

const watchedOrNot = () => {
  readList()

  const watchedID = getID()
  let isFound = false
  for (const index in allMovies) {
    const movie = allMovies[index]
    if (watchedID === movie.id) {
      movie.isWatched = !movie.isWatched
      console.log(`La película ${movie.movie} ha sido marcada como ${movie.isWatched ? 'vista' : 'no vista'}`)
      isFound = true
    }
  }
  if (!isFound) {
    console.error('No existe una película con el ID' + watchedID)
  }
}

export { addMovie, readList, updateList, deleteMovie, watchedOrNot }
