import express from 'express'
import authRoutes from './auth.route'
import userRoute from './user.route'

const router = express.Router()
/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'))

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'))

router.use("/auth", authRoutes)
router.use("/users", userRoute)

export default router
