const bill = document.getElementById("bill");
const service = document.getElementById("service");
const people = document.getElementById("people");
const result = document.getElementById('result');

const Calculate = () => {
  if (Validation()) {
      const tip = (bill.value * service.value) / 100;
      const tipPerson = tip / people.value;
      result.innerHTML = `Tip : $${tip.toFixed(2)} ${people.value > 1 ? `\n Tip Per Person : $${tipPerson.toFixed(2)}`:''} \n Total Amount : $${(Number(bill.value) + tip).toFixed(2)}`;
  }
};
const Validation = () => {
  if (bill.value == null || bill.value == 0 || bill.value == "") {
    alert("The bill amount must be filled");
    return false;
  }
  if (service.value == null || service.value == 0 || service.value == "") {
    alert("The service amount must be filled");
    return false;
  }
  if (people.value == null || people.value == 0 || people.value == "") {
    alert("The number of people must be filled");
    return false;
  }
  return true;
};
document.getElementById("calculate").onclick = Calculate;