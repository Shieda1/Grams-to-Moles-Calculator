// https://www.omnicalculator.com/chemistry/grams-to-moles#how-to-calculate-moles-from-grams-grams-to-moles-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const numberofmolesRadio = document.getElementById('numberofmolesRadio');
const molarmassRadio = document.getElementById('molarmassRadio');
const massRadio = document.getElementById('massRadio');

let numberofmoles;
let molarmass = v1;
let mass = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

numberofmolesRadio.addEventListener('click', function() {
  variable1.textContent = 'Molar mass';
  variable2.textContent = 'Mass';
  molarmass = v1;
  mass = v2;
  result.textContent = '';
});

molarmassRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of moles';
  variable2.textContent = 'Mass';
  numberofmoles = v1;
  mass = v2;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of moles';
  variable2.textContent = 'Molar mass';
  numberofmoles = v1;
  molarmass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(numberofmolesRadio.checked)
    result.textContent = `Number of moles = ${computeNumberofmoles().toFixed(2)}`;

  else if(molarmassRadio.checked)
    result.textContent = `Molar mass = ${computeMolarmass().toFixed(2)}`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)}`;
})

// calculation

function computeNumberofmoles() {
  return Number(mass.value) / Number(molarmass.value);
}

function computeMolarmass() {
  return Number(mass.value) / Number(numberofmoles.value);
}

function computeMass() {
  return Number(numberofmoles.value) * Number(molarmass.value);
}