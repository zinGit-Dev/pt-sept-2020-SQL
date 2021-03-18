const router = require('express').Router()

module.exports = db => {

  router.get("/query24",require("./query24.js")(db))
  router.get("/query25",require("./query25.js")(db))
  router.get("/query26",require("./query26.js")(db))
  router.get("/query27",require("./query27.js")(db))
  router.get("/query28",require("./query28.js")(db))
  router.get("/query29",require("./query29.js")(db))
  router.get("/query30",require("./query30.js")(db))
  router.get("/query31",require("./query31.js")(db))
  router.get("/query32",require("./query32.js")(db))
  router.get("/query33",require("./query33.js")(db))
  router.get("/query34",require("./query34.js")(db))
  router.get("/query35",require("./query35.js")(db))
  
  return router
}