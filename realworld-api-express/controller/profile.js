// 获取用户指定资料
exports.getUserProfile = async (req, res, next) => {
    try {
        res.send('获取用户资料')
    } catch (err) {
        next(err)
    }
}

// 关注用户
exports.followUser = async (req, res, next) => {
    try {
        res.send('关注用户')
    } catch (err) {
        next(err)
    }
}

// 取消关注
exports.cancelFollow = async (req, res, next) => {
    try {
        res.send('取消关注')
    } catch (err) {
        next(err)
    }
}