import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
app.use(express.json({limit: "16kb"})) // to limit such that unlimited json might not come, best practice such that server won't crash (this is to take data from form like things)
app.use(express.urlencoded({extended: true, limit: "16kb"})) // This is to handle url encoded data. extended is use here to make object inside a object (not necessary)

app.use(express.static("public")) //This is because sometime we wants to keep pdf and images on our server itself, so we giving folder name here which we have already created

app.use(cookieParser())
export {app}