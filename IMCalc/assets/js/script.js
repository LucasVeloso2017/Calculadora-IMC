const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = getInputStringValue('name')
  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height') / 100;

  const heightFinal = Number((height*height).toFixed(2));
  
  const imc =Math.round(weight / heightFinal);

  const result = getImc(imc);

  const layout = `
  <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu nome é <strong>${name}</strong>,<strong>${age} anos</strong>.
        </li>
        <li>
          Seu genero é <strong>${gender}</strong>.
        </li>
        <li>
          Seu índice massa corporal é de <strong>${imc}</strong>.
        </li>
        <li>
          Sua situação é de <strong>${result}</strong>.
        </li>
      </ul>
    </div>
  `;

  const final = document.getElementById('result');

  final.innerHTML = layout;

}


function getImc(imc){
  if(imc < 18.5){
    return "Abaixo do peso"

  }else if(imc > 19 && imc < 25){
    return "Peso normal"

  }else if(imc > 25 && imc < 30){
    return "Sobrepeso"

  }else if(imc > 30 && imc < 35){
    return "Obesidade grau 1"

  }else if(imc > 35 && imc < 40){
    return "Obesidade grau 2"

  }else if(imc > 40){
    return "Obesidade grau 3"

  }


}


// function getSelectedValue(id) {
//   const select = document.getElementById(id);
//   return select.options[select.selectedIndex].value;
// }

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function getInputStringValue(id) {
  return document.getElementById(id).value;
}