const express = require('express') 
const articleCtrl = require('../controller/article')

const router = express.Router()

// 获取文章列表
router.get('/', articleCtrl.getArticleList)

// 获取用户关注的作者文章列表
router.get('/feed', articleCtrl.followList)

// 获取文章
router.get('/:slug', articleCtrl.getArticle)

module.exports = router