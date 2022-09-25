let total = document.getElementById('total');
let brandNumber = [];
let fuelNumber = [];
let transmissionNumber = [];
let ageNumber = [];
let equipmentNumber = [];
let payeeNumber = [];
let arr = [brandNumber, fuelNumber, transmissionNumber, ageNumber, equipmentNumber, payeeNumber];
let brand = document.getElementById('name');
let transmissions = document.getElementsByName('transmission');
let fuels = document.getElementsByName('fuel');
let carAges = document.getElementsByName('carAge');
let equipments = document.getElementsByName('equipment');
let payees = document.getElementsByName('payee');
let errorMessage = document.getElementById('errorMessage');
let errorFuel = document.getElementById('errorFuel');
let errorTransmission = document.getElementById('errorTransmission');
let errorAge = document.getElementById('errorAge');
let errorEquipment = document.getElementById('errorEquipment');
let errorPayee = document.getElementById('errorPayee');


function addName() {
  if (brand.value !== document.getElementById('choice').value) {
    console.log(brandNumber);
    brandNumber.push(brand.value);
    4
    console.log(brandNumber);
  }
}

function addFuel() {
  for (let i = 0; i < fuels.length; i++) {
    if (fuels[i].checked) {
      fuelNumber.push(fuels[i].value);
      console.log(fuelNumber);
    }
  }
}

function addTransmission() {
  for (let i = 0; i < transmissions.length; i++) {
    if (transmissions[i].checked) {
      transmissionNumber.push(transmissions[i].value);
      console.log(transmissionNumber);
    }
  }
}

function addAges() {
  for (let i = 0; i < carAges.length; i++) {
    if (carAges[i].checked) {
      ageNumber.push(carAges[i].value);
      console.log(ageNumber);
    }
  }
}

function addEquipments() {
  for (let i = 0; i < equipments.length; i++) {
    if (equipments[i].checked) {
      equipmentNumber.push(equipments[i].value);
      console.log(equipmentNumber);
    }
  }
}

function addPayee() {
  for (let i = 0; i < payees.length; i++) {
    if (payees[i].checked) {
      payeeNumber.push(payees[i].value);
      console.log(payeeNumber);
    }
  }
}

function result() {
  if (brand.value == document.getElementById('choice').value) {
    errorMessage.innerHTML = "";
    errorMessage.innerHTML += "Выберете марку из списка <br>";
    errorMessage.style.color = 'red';
  } else if (fuelNumber.length == 0) {
    errorFuel.innerHTML += "Выберете топливо";
    errorFuel.style.color = 'red';
  } else if (transmissionNumber.length == 0) {
    errorTransmission.innerHTML += "Выберете тип трансмиссии";
    errorTransmission.style.color = 'red';
  } else if (ageNumber.length == 0) {
    errorAge.innerHTML += "Выберете возраст автомобиля";
    errorAge.style.color = 'red';
  } else if (equipmentNumber.length == 0) {
    errorEquipment.innerHTML += "Выберете комплектацию";
    errorEquipment.style.color = 'red';
  } else if (payeeNumber.length == 0) {
    errorPayee.innerHTML += "Выберете получателя";
    errorPayee.style.color = 'red';
  } else {
    total.innerHTML = "";
    let result = arr.reduce(function (sum, current) {
      return (+sum) + (+current);
    }, 0);
    console.log(result);
    total.innerHTML += "Итого:" + result + "евро";
    result = 0;
  }
}