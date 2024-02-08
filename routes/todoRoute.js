const { getTodo, addTodo, deleteTodo, updateTodo } = require("../controller/todocontroler")

const router = require("express").Router()
router
    .get("/todo", getTodo)
    .post("/add", addTodo)
    .delete("/delete/:id", deleteTodo)
    .put("/update/:id", updateTodo)
module.exports = router