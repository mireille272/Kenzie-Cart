import express from 'express'
import authRouter from './auth.js'
import userRouter from './users.js'
import ordersRouter from './orders.js'
import productRouter from './products.js'
import couponRouter from './coupons.js'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')
})

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/orders', ordersRouter)
router.use('/products', productRouter)
router.use('/Coupons', couponRouter)

export default router
