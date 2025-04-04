const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

function getUserById(id, callback) {
    const user = users.find( function (user) {
        return user.id === id
    })

    user 
        ? callback(null, user)
        : callback(`User not found with id ${id}`)
}

module.exports = {
    getUserById
}