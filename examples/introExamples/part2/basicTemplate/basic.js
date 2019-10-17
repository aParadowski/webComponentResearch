const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);