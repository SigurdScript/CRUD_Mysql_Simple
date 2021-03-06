const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes'))
app.use('*', (req, res, next) => {
    res.status(404).json({ messahe: 'PAGE NOT FOUND' })
    next()
})
;(() => {
    app.listen(3000, () => {
        console.log('Server on port: 3000')
    })
})()
