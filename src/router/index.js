import express from "express";
const router = express.Router();

router.use('/auth', require('./userRouter'))


module.exports = router
