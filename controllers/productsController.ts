import { Request, Response } from 'express'
import asycHandler from 'express-async-handler'
import prisma from '../server'

const getProducts = asycHandler(async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    include: { category: true }
  })
  res.json(products)
})

const getSingleProduct = async (req: Request, res: Response) => {}

const createNewProduct = async (req: Request, res: Response) => {
  res.json({ message: 'API Routes work Fine' })
}

const deleteProduct = async (req: Request, res: Response) => {
  res.json({ message: 'API Routes work Fine' })
}

const updateProduct = async (req: Request, res: Response) => {
  res.json({ message: 'API Routes work Fine' })
}

export {
  getProducts,
  getSingleProduct,
  createNewProduct,
  deleteProduct,
  updateProduct
}
