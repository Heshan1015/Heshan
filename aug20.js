//let student = {
    //"name":"Hashini",
    //"age":24,
  //  "subjects" : ["SSP","SD","Webdev"]

//};
//Simple Json object

//console.log(student.subjects[0]);

//let product = {
  //  "name": "Laptop",
    //"price": 1200,
    //"category": "Electronics",
    //"stock": 5
//}

//if (product.stock > 0) {
 //   console.log("Product available: " + product.name);
//} else {
  //  console.log("Out of stock");
//}

//let car = {
  //  brand: "Toyota",
    //model: "Corolla",
    //year: 2022
//};

//let carJSON = JSON.stringify(car);

//let carObj = JSON.parse(carJSON);

//console.log(carObj.brand);

//let settings = {
  //  theme: "dark",
    //fontSize: 14
//};
//localStorage.setItem("userSettings", JSON.stringify(settings));

//let settings = {
  //  theme: "dark",
    //fontSize: "14"
//};
//localStorage.setItem("userSettings", JSON.stringify(settings));

//let savedSettings = localStorage.getItem("userSettings");
//console.log(JSON.parse(saved));

document.getElementById("saveBtn").onclick = function () {

  let food = document.getElementById("foodInput").value;
  let foods = JSON.parse(localStorage.getItem("foods"));
  foods.push(food);
  localStorage.setItem("foods", JSON.stringify(foods));

  document.getElementById("foodList").innerHTML = foods.join("<br>");
};