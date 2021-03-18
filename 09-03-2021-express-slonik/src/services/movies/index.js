const router = require('express').Router()

module.exports = db => {
  router.get("/getAllMovies",require("./getAllMovies.js")(db))
  router.get("/mpaaNotNull",require("./mpaaNotNull")(db))
  router.get("/budgetLess5Ht",require("./budgetLess5Ht")(db))
  router.get("/mostExpensiveMovies",require("./mostExpensiveMovies")(db))
  router.get("/srcRemake",require("./srcRemake")(db))
  router.get("/imdbNotNull",require("./imdbNotNull")(db))
  router.get("/moviesTomatoes",require("./moviesTomatoes")(db))
  router.get("/best20Movies",require("./best20Movies")(db))
  router.get("/budgetNotRated",require("./budgetNotRated")(db))
  router.get("/futurMovies",require("./futurMovies")(db))
  router.get("/yearsRate",require("./yearsRate")(db))
  router.get("/grossZero",require("./grossZero")(db))
  router.get("/lessGross50",require("./lessGross50")(db))
  router.get("/titleF",require("./titleF")(db))
  router.get("/bSupMilion",require("./bSupMilion")(db))

  return router
}