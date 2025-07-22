const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index')
})


app.post("/create", (req, res) => {

  fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.description, (err, filedata) => {
    res.redirect("/")
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
