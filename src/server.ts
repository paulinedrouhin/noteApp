import express, {Application} from "express"
import bodyParser from "body-parser"
import cors from "cors"
import {endpoints} from "./controller/index"

const app : Application = express()

app.use(cors()) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', endpoints)


app.listen(4000, () => console.log('server running'))