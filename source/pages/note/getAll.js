var fs = require('fs');
var files = fs.readdirSync('/note');

list = document.querySelector('ul');
for (i = 1; i <= files.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = files[i]

    let anchor = document.createElement('a');
    anchor.setAttribute('href', '/' + files[i]);

    listItem.appendChild(anchor);

    list.appendChild(li);
}

