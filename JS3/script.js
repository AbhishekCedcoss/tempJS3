function updateForm() {
  var product = document.getElementById("product").value;
  var qty = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var table = document.getElementById("results");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = product;
  cell2.innerHTML = qty;
  cell3.innerHTML = price;
}
