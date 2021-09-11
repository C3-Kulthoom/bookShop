const express = require("express")
const {addToFavorite,FindByUserId}=require("../controllers/favorite")
const favoriteRouter=express.Router()
const {authentication}=require("../middlewares/authentication")

favoriteRouter.post("/",authentication,addToFavorite)
favoriteRouter.get("/getAllFav/",authentication,FindByUserId)

module.exports = favoriteRouter;