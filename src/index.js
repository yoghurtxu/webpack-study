var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
var Avatar = require('./avatar.jpg');
import style from './index.scss';
import createAvatar from './createAvatar.js';
new Header();
new Sidebar();
new Content();

console.log(style)
createAvatar();
var img=new Image();
img.classList.add(style.avatar);
img.src=Avatar;
var root=document.querySelector('#root')
root.append(img)

console.log(1)

