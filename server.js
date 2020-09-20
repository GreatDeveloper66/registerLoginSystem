import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.get('*', (req,res) => {
    res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
