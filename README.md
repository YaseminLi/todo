使用react+bootstrap仿[microsoft to-do](https://to-do.microsoft.com)待办事项管理
## 项目配置
1. 生成package.json```npm init```
2. 安装webpack```npm i webpack webpack-cli  -D```

    打开```package.json```，在```"scripts": {}```中加入```"build": "webpack"```打包命令，
3. 安装react需要的包：
    - npm install  react react-dom
    - npm install -D babel-loader @babel/core @babel/preset-env
    - npm install -D @babel/preset-react

4. 完善文件目录结构(根目录下)
    - ./src/main.js为入口文件
    - ./bundle用于盛放webpack打包输出的bundle.js
    - ./bundle/html html页面
    - ./webpack.config.js用于配置webpack环境。

webpack.config.js
```js
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/bundle/'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",//ES6转ES5
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"] //babel-loader需要的预设
                }
            }

        ]
    }
}
```
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>To-Do</title>
</head>
<body>
    <div id="root">root</div>
</body>
<!-- 打包后的js文件 -->
<script src="./bundle.js"></script> 
</html>
```

./src/index.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
    <h1>hello xiaoming</h1>, document.getElementById('root'))
```
5. 执行 npm run build 可以完成打包

6. 项目实时刷新
原有操作：编写代码-重新打包-刷新html-看到效果麻烦！！！！！需要实时在网页中看到代码的更改
	
解决：
- --watch 观察者模式
package.json，在"scripts": {}中加入"watch": "webpack --watch"，之后使用npm run watch就可以观察文件了

缺点是：修改之后需要手动刷新浏览器才能看到更改的代码
		
- webpack-dev-server
``` npm install --save-dev webpack-dev-server ```package.json，在"scripts": {}中加入"dev": "webpack-dev-server --content-base bundle/"（--content-base:设定webpack-dev-server的根目录,此时在bundle文件下找html文件打开）

npm run dev有更改后浏览器可以自动加载页面