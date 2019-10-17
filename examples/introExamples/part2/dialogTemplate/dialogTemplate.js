const template = document.getElementById('dialog-template');
console.log(document)
document.body.appendChild(
  document.importNode(template.content, true)
);