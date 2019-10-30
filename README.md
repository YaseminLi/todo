使用react+bootstrap仿[microsoft to-do](https://to-do.microsoft.com)待办事项管理
文档参考：[bootstrap官网英文](https://getbootstrap.com/)
文档参考：[bootstrap中文文档](http://bs4.ntp.org.cn)
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
    - ./src/sass/index.scss为样式文件
    - ./bundle用于盛放webpack打包输出的bundle.js
    - ./bundle/index.html html页面
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
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>To-Do</title>       
</head>
<body>
    <div id="root">root</div>
</body>
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

7. 安装bootstrap
    - npm install bootstrap
    - index.js中引入
    ```js
    import 'bootstrap/dist/js/bootstrap.bundle.min.js'//引入的是编译好并压缩好的bootstrap.js
    import './sass/index.scss'//引入样式文件，在webpack中要做转译
    ```
    bootstrap 依赖jquer和popper,bootstrap.bundle.min.js包含popper,需要再安装jquery```npm install jquery```
    - 引入样式，在./src/sass/index.scss中添加
    ```scss
    @import "../../node_modules/bootstrap/scss/bootstrap";
    ```
    在webpack中对scss文件做转译，webpack.config.js中添加,并安装涉及到的loader和require
    ```js
    {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
    ```
 npm run dev运行项目，ok
 可以尝试修改页面背景色为粉色：样式要覆盖bootstrap的默认样式时，新的样式定义需要放在@import前面，效果ok
 ```css
 $body-bg:pink;
@import "../../node_modules/bootstrap/scss/bootstrap";
```

最外层容器添加```class="container-fluid"```
.container 有margin并随着视口宽度的改变而变化
.container-fluid 没有margin,但是还有15px的padding

body font-size 为16px
圆角、边框都有相应的类名

样式覆盖：！important 或者用id选择器，bootstrap中样式一般使用class选择器

高度上满屏显示 
html,body{
    height:100% !important;
}
#root {
    height: 100%;
}

.main {
    height: 100%;
    display: flex;
    flex-direction: column;

}
其中一个为固定高度，一个为自动撑开，设置{
    flex: 1 1 0px
}

title 标签添加小图标
 <link rel="icon" href="./title.ico" type="images/x-ico">