const router = require('express').Router()

module.exports = db => {
  router.get("/q1",require("./q1.js")(db))
  router.get("/q2",require("./q2.js")(db))
  router.get("/q3",require("./q3.js")(db))
  router.get("/q4",require("./q4.js")(db))
  router.get("/q5",require("./q5.js")(db))
  router.get("/q6",require("./q6.js")(db))
  return router
}