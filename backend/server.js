const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => console.log('SERVER ON http://localhost:' + PORT))

app.get("/api", (req, res) => {
    res.json({ users: ["uno", "dos", "tres"] })
})
