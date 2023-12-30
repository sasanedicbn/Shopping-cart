import { cars } from "./data";
const car = document.querySelector(".car");
const sortOptions = document.querySelector(".sortOptions");

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
displayCars();

function sortElement(event) {
  const valueElement = event.target.value;
  console.log(valueElement);

  if (valueElement === "az") {
    cars = cars.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (valueElement === "za") {
    cars = cars.slice().sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return;
  }
}
sortOptions.addEventListener("click", sortElement);
