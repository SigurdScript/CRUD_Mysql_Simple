const pool = require('../db')

async function getUsers(req, res) {
    const SQL = 'SELECT * FROM users'
    const [rows] = await pool.query(SQL)
    if (!rows.length) {
        return res.status(404).json({ message: 'no registered users found' })
    }
    return res.status(200).json(rows)
}

async function getUserById(req, res) {
    const { id } = req.params
    const SQL = 'SELECT * FROM users WHERE id = ?'
    const [rows] = await pool.query(SQL, [id])
    if (!rows.length) {
        return res.status(404).json({ message: 'no registered user found' })
    }
    return res.status(200).json(rows)
}

async function postUser(req, res) {
    const { username, email, phone } = req.body
    const SQL = 'INSERT INTO users (username, email, phone) VALUES (?, ? ,?)'

    try {
        await pool.query(SQL, [username, email, phone])
        return res.status(201).json({ message: 'New user added successfully.' })
    } catch (error) {
        return res.status(404).json({ message: 'The email is registered' })
    }
}

async function putUserById(req, res) {
    const { username, email, phone } = req.body
    const { id } = req.params
    const SQL =
        'UPDATE users SET username = ? , email = ? , phone = ? WHERE id = ?'

    try {
        await pool.query(SQL, [username, email, phone, id])
        return res.status(202).json({ message: 'Data updated successfully' })
    } catch (error) {
        return res.status(400).json({ message: 'The email is registered' })
    }
}

async function deleteUserById(req, res) {
    const { id } = req.params
    const SQL = 'DELETE FROM users WHERE id = ?'
    try {
        await pool.query(SQL, [id])
        return res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    deleteUserById,
}
