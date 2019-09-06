// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');
// var Avatar = require('./avatar.jpg');
// import style from './index.scss';
// import createAvatar from './createAvatar.js';
// new Header();
// new Sidebar();
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


import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}
