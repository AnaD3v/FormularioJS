const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
    ev.preventDefault()


  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations,
  });

  const section = document.createElement('section');
  section.innerText = '\n\nNome: ' + name + '\nEndereço: ' + address + '\nTipo de Pão: ' + breadType + '\nSalada: ' + main +'\nSalad:\n' + salad + '\nObservações: ' + observations + '\n\n';
  form.appendChild(section)

  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="address"]').value = '';
  document.querySelector('select[name="breadType"]').value = '';
  document.querySelector('input[name="main"]').value = '';
  document.querySelector('input[name="salad"]').value = '';
  document.querySelector('textarea[name="observations"]').value = '';
})