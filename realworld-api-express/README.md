---
1. PORT = process.env.PORT 从环境变量中拿到端口好
2. 可以用 PORT=5000 nodemon app.js 命令手动修改端口号
---

# 接口

## 目录接口
```markdown
.
|-- config  # 配置文件
  |--config.default.js
|-- controller  # 用于解析用户输入, 处理后返回相应结果
|-- model  # 数据持久层
|-- middleware  # 用于编写中间件
|-- router  # 用于配置 URL 路由
|-- utils  # 工具模块
|-- app.js  # 用于自定义启动时的初始化工作
```

## 配置常用中间件

+ 解析请求体
  + express.json()
  + express.urlencoded()
+ 日志输出
  + morgan()
+ 为客户端提供跨域资源请求
  + cors() -- Header中有 Access-Control-Allow-Origin: *, 表示成功

## 将数据保存在数据库

1. 获取请求信息
2. 数据验证
  1. 基本数据验证
  2. 业务数据验证
3. 验证通过, 将数据存在数据库
4. 发送成功响应

```js



```
