import { cars } from "./data";
const car = document.querySelector(".car");

function displayCars(data) {
  cars.forEach((data) => {
    const cars = document.createElement("div");

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
  <p><strong>Available:</strong> ${data.available ? "Yes" : "No"}</p>
  <hr>
  </div>
`;

    car.appendChild(cars);
  });
}

function sortedArray() {
  const sortOptions = document.querySelector(".sortOptions");
  const valueOfSortOptions = sortOptions.value;
  let sortedCars;

  if (valueOfSortOptions === "A-Z") {
    sortedCars = cars.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (valueOfSortOptions === "Z-A") {
    sortedCars = cars.slice().sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return;
  }

  displayCars(sortedCars);
}

displayCars(cars);
sortedArray();
