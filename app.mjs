import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 8000
const app = express()
import router from "./src/routes/product.mjs"
import User from './src/user/User.mjs'
const user = new User()

app.use(express.static('public'))
app.use(express.json())
// app.use(cors())
app.use(router)

app.post('/api/user/login', user.login)

app.listen(PORT, err => console.log(err ? err : `Server running on : ${PORT}`))