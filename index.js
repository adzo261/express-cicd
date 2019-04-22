const express = require("express")
const routes = require("./routes/route")
const path = require("path")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use("/", routes)
app.set("views", path.join(__dirname, "views"))
app.engine("hbs", exphbs({ extname: ".hbs", defaultLayout: "base" }))
app.set("view engine", "hbs")

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
