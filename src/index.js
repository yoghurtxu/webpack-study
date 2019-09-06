var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');
// var Avatar = require('./avatar.jpg');
// import style from './index.scss';
// import createAvatar from './createAvatar.js';
new Header();
new Sidebar();
// new Content();
//
// console.log(style)
// createAvatar();
// var img=new Image();
// img.classList.add(style.avatar);
// img.src=Avatar;
// var root=document.querySelector('#root')
// root.append(img)
//
// console.log(1)

// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);
//
// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }
// console.log(12)

// import "@babel/polyfill";

/*import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}

const aaa=1;*/



// Tree Shaking 只支持 ES Module

// import { add } from './math.js';
//
// add(1, 7);

//同步代码
/*import _ from 'lodash';
// import jquery from 'jquery';

var element = document.createElement('div');
element.innerHTML = _.join(['Dell', 'Lee'], '-');
document.body.appendChild(element);*/


//异步代码
// function getComponent() {
//     //测试的异步代码，需要安装babel-plugin-dynamic-import-webpack（非官方），或者@babel/plugin-syntax-dynamic-import(官方)
//     return import('lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-');
//         return element;
//     })
// }
//
// getComponent().then(element => {
//     document.body.appendChild(element);
// });

// 代码分割，和webpack无关
// webpack中实现代码分割，两种方式
// 1. 同步代码： 只需要在webpack.common.js中做optimization的配置即可
// 2. 异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中

//懒加载
// async function getComponent() {
//     const { default: _ } = await import('lodash');
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element;
// }
//
// document.addEventListener('click', () =>{
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     });
// })
//场景：点击之后才加载click.js,这样提高代码的利用率，但是可能带来的问题是，点击之后加载click.js需要一段时间，所以webpackPrefetch 在主要的代码加载完之后，对clikc.js进行加载，
//所以webpackPrefetch是主代码加载完后，加载click.js,而webpackPreload是click.js会跟主代码一起异步加载，文档：https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
//webpackPrefetch在浏览器可能有兼容问题
//在network中查看，ctrl+shift+P 输入coverage
document.addEventListener('click', () =>{
    import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
        func();
    })
});

