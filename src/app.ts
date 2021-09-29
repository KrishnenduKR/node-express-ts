import express, {urlencoded} from 'express'
import routes from './routes/user'

const app = express()
const port = 3500
app.use(urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, ()=> {
    console.log(`running on port ${port}`)
})

app.use('/',routes)