const { response } = require('express')
const { getUser, insertUser, updateUser, deleteUser } = require('../dataBase/api')

// 用户登录
exports.login = async (req, res, next) => {
    try {
        res.send('poss /user/login')
    } catch (err) {
        next(err)
    }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        getUser().then(response => {
            res.send(response)
        }) // 获取用户
    } catch (err) {
        next(err)
    }
}

// 更新当前登录用户(改手机号)
exports.updateCurrentUser = async (req, res, next) => {
    try {
        let param = req.body
        console.log(param)
        let { username, tel } = param // 更新用户
        updateUser([tel, username]).then(response => {
            res.send(response)
        })

    } catch (err) {
        next(err)
    }
}

// 用户注册
exports.register = async (req, res, next) => {
    try {


        // 1. 获取请求体数据
        // 2. 数据验证

        // 3. 数据保存到数据库
        // 4. 发送成功响应

        let param = req.body
        console.log(param)
        let { username, gender, age, tel, password } = param
        insertUser([username, password, tel]).then(response => {
            res.send({
                register: 'ok'
            })
        })
    } catch (err) {
        next(err)
    }
}

// 用户注销
exports.delUser = async (req, res, next) => {
    try {
        let id = req.query.id
        console.log('将要删除的id', id)
        deleteUser([id]).then(response => {
            res.send(response)
        })
    } catch (err) {
        next(err)
    }
}