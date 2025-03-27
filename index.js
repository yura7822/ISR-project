const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth'))

async function start() {
try {
        await mongoose.connect("mongodb+srv://admin:admin@firstdb.hse9i.mongodb.net/todo?retryWrites=true&w=majority&appName=firstDB")

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        });
    } catch (err) {
        console.error('Error connecting to the database:', err)
    }
}
start();



