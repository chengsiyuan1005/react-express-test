//api.js

const connection = require('./db')


//查询
const getUser = () => {
  return new Promise((resolve, reject) => {
    //第一个参数：sql语句
    //第二个参数：回调函数（err：查询错误，data：查询结果）
    connection.query("select * from user", (err, data) => {
      console.log('mysql err: ', err)
      resolve(data)
    })
  })
}
//添加
const insertUser = (param) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into user(username,password,tel) values(?,?,?)", param, (err, data) => {
      //如果err为null则成功
      console.log('mysql err: ', err)
      resolve(data)
    })
  })
}
//改
const updateUser = (param) => {
  return new Promise((resolve, reject) => {
    console.log('param', param)
    connection.query("update user set  tel = ? where username = ?", param, (err, data) => {
      //如果err为null则成功
      console.log('mysql err: ', err)
      resolve(data)
    })
  })
}

//删除
const deleteUser = (param) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from user where id = ?", param, (err, data) => {
      console.log('mysql err: ', err)
      resolve(data)
    })
  })
}
//导出方法，在需要使用到的模块中导入
module.exports = {
  getUser,
  updateUser,
  insertUser,
  deleteUser
}
