const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json({ extended: true }))
app.use('/auth', require('./routes/auth'))
app.use('/api', require('./routes/getUser'))
app.use('/news', require('./routes/newsRoute'))


async function start() {
try {
        await mongoose.connect('')

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        });
    } catch (err) {
        console.error('Error connecting to the database:', err)
        if (!MONGODB){
            
        }
    }
}
start();