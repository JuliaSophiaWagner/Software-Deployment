const express = require('express')
const app = express()
const port = process.env.PORT||3000;
const appInsights = require("applicationinsights");

appInsights
  .setup("aa0863e6-4d90-497f-900a-12c9ffd57b0b")
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .start()

app.set("view engine", "jade");

app.get('/', (req, res) => {
  res.render("index");
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}")
})
