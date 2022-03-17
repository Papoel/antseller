import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Pascal Briffard',
        email: 'admin@email.fr',
        password: bcrypt.hash('password', 10),
        isAdmin: true,
    },
    {
        name: 'Christopher Gosselin',
        email: 'user0@email.fr',
        password: bcrypt.hash('password', 10),
    },
    {
        name: 'Luc skywalker',
        email: 'user1@email.fr',
        password: bcrypt.hash('password', 10),
    },
]

export default users