function number() {
    var div = document.createElement('div');
    div.setAttribute('id', 'number');
    div.innerHTML = 3;
    document.body.appendChild(div);
}

export default number;
