var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
var Avatar = require('./avatar.jpg');
import './index.scss';
console.log(Header);
console.log(Avatar);
new Header();
new Sidebar();
new Content();
var img=new Image();
img.classList.add('avatar');
img.src=Avatar;
var root=document.querySelector('#root')
root.append(img)

