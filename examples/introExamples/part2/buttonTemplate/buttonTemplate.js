const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);

const button = document.getElementById('click-me');
button.addEventListener('click', event => alert(event));