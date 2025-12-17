import { addTodo } from "./Controller/todoController.js";
import express from 'express'
const route = express.Router()
route.post('/addtodo',addTodo);
export default route