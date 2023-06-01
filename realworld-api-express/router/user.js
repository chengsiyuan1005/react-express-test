const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()

// 用户登录
router.post('/login', userCtrl.login)

// 获取登录用户
router.get('/', userCtrl.getCurrentUser)

// 更新用户
router.put('/', userCtrl.updateCurrentUser)

// 用户注册
router.post('/register', userCtrl.register)

// 用户注销
router.delete('/', userCtrl.delUser)

module.exports = router // 导出路由