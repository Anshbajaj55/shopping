import express from 'express'
import { constants } from '../constant/index.mjs'
import Product from '../product/Product.mjs'
const router = express.Router()
const product = new Product()

router.post(constants.product.add, product.add)
router.get(constants.product.find, product.find)
router.delete(constants.product.remove, product.remove)
router.get(constants.product.read, product.read)
router.put(constants.product.update, product.update)

export default router