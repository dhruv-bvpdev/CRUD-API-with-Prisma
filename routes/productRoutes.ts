import express from 'express'
import {
  getProducts,
  getSingleProduct,
  createNewProduct,
  deleteProduct,
  updateProduct
} from '../controllers/productsController'

const router = express.Router()

router.route('/').get(getProducts).post(createNewProduct)
router
  .route('/:id')
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(updateProduct)

export default router
