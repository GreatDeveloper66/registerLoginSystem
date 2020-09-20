import express from 'express'
import bodyPaser from 'body-parser'
import path from 'path'
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.get('*', (req,res) => {
    res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
