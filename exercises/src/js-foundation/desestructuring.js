const { OS, HOME, npm_lifecycle_script } = process.env

console.table({OS, HOME, npm_lifecycle_script})

const soccerTeams = ['Alemania', 'Argentina', 'Bolivia', 'Brasil']
const [, , , brasil] = soccerTeams

console.log({brasil})