const {Router} = require('express')
const {Athlete} = require ('../models/Athletes')

const router = Router()

////////////////////////////////////////// GET ROUTES ////////////////////////////////////////////////////////

routerAthletes.get("/", getPosts);

routerAthletes.get("/:id", getById);

////////////////////////////////////////// POST ROUTES ///////////////////////////////////////////////////////

////////////////////////////////////////// PUT ROUTES ////////////////////////////////////////////////////////

////////////////////////////////////////// DELETE ROUTES /////////////////////////////////////////////////////
module.exports = router