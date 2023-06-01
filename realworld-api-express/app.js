const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

app.use(morgan('dev')) // 最好放到获取端口前

const PORT = process.env.PORT || 3000  // 默认端口

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// 挂载路由
app.use('/api', router)

// 挂载统一处理服务端错误中间件
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`${PORT} server...`)
})