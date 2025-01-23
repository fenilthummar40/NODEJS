import express from 'express'
import { addToCart, getUserCart, updateToCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRounter = express.Router()

cartRounter.post('/get',authUser,getUserCart)
cartRounter.post('/add',authUser,addToCart)
cartRounter.post('/update',authUser,updateToCart)

export default cartRounter