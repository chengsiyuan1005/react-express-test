import React from 'react'
import demo from './demo'

export default function index () {
  // flat 引入 按需加载
  const flat = require('./demo').default
  console.log(flat())
  // console.log(demo())

  function* helloG () {
    yield 'hello';
    yield 'world'
    return 'ending'
  }

  let hw = helloG()

  // generator函数只有在调用next方法时才会执行
  console.log(hw.next(), 'clg1')

  console.log(hw.next(), 'clg2')

  console.log(hw.next(), 'clg3')

  function normalF () {
    console.log('using')
  }

  // 普通函数在变量赋值时就会执行
  let using = normalF()

  // next返回带一个参数作为上一个yield表达式返回值




  return (
    <div>home</div>
  )
}
