
const favTeams = [
  { id: 1, team: 'LA Lakers' },
  { id: 2, team: 'GS Warriors' },
  { id: 3, team: 'Memphis Grizzlies' }
]

let counterID = 3
const addTeam = () => {
  let newTeam
  do {
    newTeam = prompt('Introduce el nuevo equipo para añadirlo a la lista')
  } while (newTeam === null || newTeam.trim() === '' || isNaN(newTeam) === false)

  counterID++
  const addTeam = {
    id: counterID,
    team: newTeam
  }
  favTeams.push(addTeam)
  console.log(`${newTeam} ha sido añadido a la lista.`)
}

const readList = () => {
  console.clear()
  console.log('🏀EQUIPOS FAVORITOS🏀')
  for (const teams of favTeams) {
    console.log(`${teams.id}: ${teams.team}`)
  }
}

const updateList = () => {
  readList()
  let updateID
  do {
    updateID = prompt('Indica el id del equipo a actualizar')
  } while (updateID === null || updateID.trim() === '' || isNaN(updateID) === true)
  updateID = Number(updateID)

  let isFound = false
  for (const i in favTeams) {
    if (updateID === favTeams[i].id) {
      let updatedTeam
      do {
        updatedTeam = prompt('Introduce el nombre del equipo que ocupará el lugar')
      } while (updatedTeam === null || updatedTeam.trim() === '' || isNaN(updatedTeam === false))
      console.log(`El equipo ${favTeams[i].team} ha sido sustituido por ${updatedTeam}.`)
      favTeams[i].team = updatedTeam
      isFound = true
    }
  }
  if (!isFound) {
    console.error(`No existe ningún equipo con el ID: ${updateID}`)
  }
}

const deleteTeam = () => {
  readList()
  let deleteID
  do {
    deleteID = prompt('Introduce el ID del equipo que quieres borrar.')
  } while (deleteID === null || deleteID.trim() === '' || isNaN(deleteID) === true)
  deleteID = Number(deleteID)
  let isFound = false
  for (let i in favTeams) {
    if (deleteID === favTeams[i].id) {
      console.log(`El equipo ${favTeams[i].team} ha sido borrado.`)
      favTeams.splice(i, 1)
      isFound = true
    }
  }
  if (isFound === false) {
    console.error(`No existe ningún ID ${deleteID}`)
  }
}
export { addTeam, readList, updateList, deleteTeam }
