import { cars as data } from "./data";
const car = document.querySelector(".car");
const sortOptions = document.querySelector(".sortOptions");
const availability = document.querySelector(".availability");
const deleteButton = document.querySelector(".deleteCar");

function logicCars() {
  let cars = [...data];
  let filteredCars = [...cars];
  console.log(filteredCars);
  const displayCars = (elementCars) => {
    car.innerHTML = "";
    console.log(elementCars);
    elementCars.forEach((data) => {
      const cars = document.createElement("div");
      //   console.log(data);
      const backgroundColor =
        data.available === "yes" ? "rgb(91, 199, 91)" : "rgb(214, 81, 81)";
      const availabilityText = data.available === "yes" ? "Yes" : "No";

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
    <p style="background-color: ${backgroundColor};"><strong>Available:</strong> ${availabilityText}</p>
      <button class="deleteCar" data-carId=${data.id}>Delete</button>
      
    </div>
  `;
      const deleteButton = cars.querySelector(".deleteCar");
      deleteButton.addEventListener("click", function () {
        deleteCar(data.id);
      });
      car.appendChild(cars);
    });
  };
  function sortCars(event) {
    const sortingFunctions = {
      az: (a, b) => a.name.localeCompare(b.name),
      za: (a, b) => b.name.localeCompare(a.name),
      low: (a, b) => a.price - b.price,
      high: (a, b) => b.price - a.price,
    };
    const sort = sortingFunctions[event.target.value];
    if (sort) {
      filteredCars.sort(sort);
      displayCars(filteredCars);
    }
  }

  function availableCars(event) {
    const [key, value] = event.target.value.split("-");
    console.log(key, value);
    filteredCars = [...cars];
    filteredCars = filteredCars.filter((element) => element[key] === value);
    displayCars(filteredCars);
  }
  function deleteCar(id) {
    filteredCars = filteredCars.filter((el) => el.id !== id);
    displayCars(filteredCars);
  }
  const getCars = () => filteredCars;
  return {
    displayCars,
    sortCars,
    availableCars,
    getCars,
    deleteCar,
  };
}
const logic = logicCars();

logic.displayCars(logic.getCars());
availability.addEventListener("click", logic.deleteCar);
availability.addEventListener("change", logic.availableCars);
sortOptions.addEventListener("change", logic.sortCars);
