import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Pascal Briffard',
        email: 'admin@email.fr',
        password: await bcrypt.hash('password', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'user0@email.fr',
        password: await bcrypt.hash('password', 10),
    },
    {
        name: 'Msamus the Mentor',
        email: 'user1@email.fr',
        password: await bcrypt.hash('password', 10),
    },
]

export default users