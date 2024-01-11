import express from "express"
import { deltask, gettaskall, newtask, updatetask } from "../controllers/task.js";
import { isAuth } from "../middlewares/auth.js";
const taskrouter = express.Router();

taskrouter.post("/new",isAuth,newtask);
taskrouter.get("/my",isAuth,gettaskall);
taskrouter.route("/:id").put(isAuth,updatetask).delete(isAuth,deltask)
export default taskrouter;