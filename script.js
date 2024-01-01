import { cars } from "./data";
const car = document.querySelector(".car");
const sortOptions = document.querySelector(".sortOptions");
const availability = document.querySelector(".availability");

function displayCars(elementCars) {
  car.innerHTML = "";
  console.log(elementCars);
  elementCars.forEach((data) => {
    const cars = document.createElement("div");
    const backgroundColor = data.available
      ? "rgb(91, 199, 91)"
      : "rgb(214, 81, 81)";

    cars.innerHTML = `<div class="cart-row"> 
  <div class="first-data">
  <h1>${data.name}</h1>
  <img src = "${data.image}" alt="${data.image}"/>
  </div>
  <div class="second-data">
  <p><strong>Brand:</strong> ${data.brand}</p>
  <p><strong>Manufactured Year:</strong> ${data.manufacturedYear}</p>
  <p><strong>Doors:</strong> ${data.doors}</p>
  <p><strong>Price:</strong><span class="price">$${data.price}<span></p>
  </div>
  <p style="background-color: ${backgroundColor};"><strong>Available:</strong> ${
      data.available ? "Yes" : "No"
    }</p>
  <hr>
  </div>
`;
    car.appendChild(cars);
  });
}
displayCars(cars);

function sortCars(event) {
  const valueElement = event.target.value;

  if (valueElement === "az") {
    let sortedCars = cars.slice().sort((a, b) => a.name.localeCompare(b.name));
    displayCars(sortedCars);
    console.log(sortedCars);
  } else if (valueElement === "za") {
    let sortedCars = cars.slice().sort((a, b) => b.name.localeCompare(a.name));
    displayCars(sortedCars);
    console.log(sortedCars);
  } else if (valueElement === "low") {
    let sortedCarsLow = cars.slice().sort((a, b) => a.price - b.price);
    console.log(sortedCarsLow);
    displayCars(sortedCarsLow);
  } else if (valueElement === "high") {
    const sortedCarsHigh = cars.slice().sort((a, b) => b.price - a.price);
    displayCars(sortedCarsHigh);
  } else {
    return;
  }
}
function availableCars(event) {
  const valueElement = event.target.value;
  console.log(valueElement);
  if (valueElement === "available") {
    const sortedAvailable = cars.filter((car) => car.available === true);
    console.log(sortedAvailable);
    displayCars(sortedAvailable);
  } else if (valueElement === "notAvailable") {
    const sortedNotAvailable = cars.filter((car) => car.available === false);
    console.log(sortedNotAvailable);
    displayCars(sortedNotAvailable);
  } else {
    return displayCars(cars);
  }
}
availability.addEventListener("change", availableCars);
sortOptions.addEventListener("change", sortCars);
