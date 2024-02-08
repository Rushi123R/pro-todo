const Todos = require("../model/Todos")

exports.addTodo = async (req, res) => {
    try {
        Todos.create(req.body)
        res.status(201).json({ message: "add successs" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went successs" })
    }
}
exports.getTodo = async (req, res) => {
    try {
        const result = await Todos.find()
        res.status(200).json({ message: "get successs", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went successs" })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        Todos.findByIdAndUpdate(id, req.body)
        res.status(200).json({ message: "update successs" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went successs" })
    }
}
exports.deleteTodo = async (req, res) => {
    try {

        Todos.findByIdAndUpdate(req.params.id)
        res.status(200).json({ message: "update successs" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went successs" })
    }
}