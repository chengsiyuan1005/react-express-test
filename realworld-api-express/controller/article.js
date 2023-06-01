// 获取文章列表
exports.getArticleList = async (req, res, next) => {
    try {
        res.send('获取文章列表')
    } catch (err) {
        next(err)
    }
}

// 获取用户关注的作者文章列表
exports.followList = async (req, res, next) => {
    try {
        res.send('获取用户关注的作者文章列表')
    } catch (err) {
        next(err)
    }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
    try {
        res.send('获取文章')
    } catch (err) {
        next(err)
    }
}