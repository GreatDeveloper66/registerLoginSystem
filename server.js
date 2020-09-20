import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), "client","build")))

app.get('*', (req,res) => {
    res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
