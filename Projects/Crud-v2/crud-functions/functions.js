
const favTeams = [
  { id: 1, team: 'LA Lakers', isChampion: true },
  { id: 2, team: 'GS Warriors', isChampion: true },
  { id: 3, team: 'Memphis Grizzlies', isChampion: false }
]

const getTeam = (mensaje = 'Escribe el equipo') => {
  let newTeam
  do {
    newTeam = prompt(mensaje)
  } while (newTeam === null || newTeam.trim() === '' || isNaN(newTeam) === false)

  return newTeam
}

const getID = () => {
  let getID
  do {
    getID = prompt('Indica el id del equipo a actualizar')
  } while (getID === null || getID.trim() === '' || isNaN(getID) === true)
  getID = Number(getID)

  return getID
}

let counterID = 3
const addTeam = () => {
  const newTeam = getTeam()

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
    const championIcon = teams.isChampion === true ? '💍' : '❌'
    console.log(`${championIcon} - ${teams.id}: ${teams.team}`)
  }
}

const updateList = () => {
  readList()

  const updateID = getID()

  let isFound = false
  for (const i in favTeams) {
    if (updateID === favTeams[i].id) {
      const updatedTeam = getTeam('Escribe al equipo que ocupará el lugar.')

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

  const deleteID = getID()

  let isFound = false
  for (const i in favTeams) {
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

const isChampionOrNot = () => {
  readList()

  const championID = getID()

  let isFound = false

  for (const index in favTeams) {
    const teams = favTeams[index]
    if (championID === teams.id) {
      teams.isChampion = !teams.isChampion
      console.log(`El equipo ${teams.team} ahora es ${teams.isChampion ? 'campeón' : 'no campeón'}`)
      isFound = true
    }
  }
  if (!isFound) {
    console.error('No existe un equipo con el id: ' + championID)
  }
}
export { addTeam, readList, updateList, deleteTeam, isChampionOrNot }
