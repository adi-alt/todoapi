import express from "express";
import userrouter from "./routes/user.js"
import taskrouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorhandle } from "./middlewares/error.js";
import cors from "cors"
export const app = express();
config({
    path:"./data/config.env"
})
app.use(express.json());
app.use(cookieParser());


// cors - cross origin resource sharing
app.use(cors({
    origin:[process.env.FRONT_END],
    credentials:true
}))


// {
//     origin:[process.env.FRONT_END],
//     methods: ["GET","POST","PUT","DELETE"],
//     Credentials:true,
// }
app.use("/api/v1/users",userrouter)
app.use("/api/v1/tasks",taskrouter)


app.get("/", (req, res) => {
    res.send("Nice working");
  });


app.use(errorhandle);