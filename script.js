import { cars as data } from "./data";
const car = document.querySelector(".car");
const sortOptions = document.querySelector(".sortOptions");
const availability = document.querySelector(".availability");
const deleteCars = document.querySelector(".deleteCar");

function logicCars() {
  let cars = [...data];
  let filteredCars = [...cars];
  const displayCars = (elementCars) => {
    car.innerHTML = "";
    console.log(elementCars);
    elementCars.forEach((data) => {
      const cars = document.createElement("div");
      console.log(data);
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
      car.appendChild(cars);
    });
  };
  function sortCars(event) {
    const valueElement = event.target.value;

    if (valueElement === "az") {
      let sortedCars = cars
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      displayCars(sortedCars);
      console.log(sortedCars);
    } else if (valueElement === "za") {
      let sortedCars = filteredCars.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      displayCars(sortedCars);
      console.log(sortedCars);
    } else if (valueElement === "low") {
      let sortedCarsLow = filteredCars.sort((a, b) => a.price - b.price);
      console.log(sortedCarsLow);
      displayCars(sortedCarsLow);
    } else if (valueElement === "high") {
      const sortedCarsHigh = filteredCars.sort((a, b) => b.price - a.price);
      displayCars(sortedCarsHigh);
    } else {
      return;
    }
  }
  function availableCars(event) {
    const [key, value] = event.target.value.split("-");
    filteredCars = [...cars];
    filteredCars = filteredCars.filter((element) => element[key] === value);
    console.log(filteredCars);
    displayCars(filteredCars);

    // if (valueElement === "available") {
    //   filteredCars = filteredCars.filter((car) => car.available === true);
    //   displayCars(filteredCars);
    // } else if (valueElement === "notAvailable") {
    //   filteredCars = filteredCars.filter((car) => car.available === false);
    //   displayCars(filteredCars);
    // } else {
    //   return displayCars(cars);
    // }
  }
  const getCars = () => filteredCars;
  return {
    displayCars,
    sortCars,
    availableCars,
    getCars,
  };
}
const logic = logicCars();

logic.displayCars(logic.getCars());

// function deleteCar(event) {
//   const valueElement = event.target.value;
//   console.log(valueElement);
//   cars.forEach((element) => {
//     const deleteElement = element !== valueElement;
//     console.log(deleteElement);
//   });
//   displayCars(deleteElement);
// }
// deleteCar();
// deleteCars.addEventListener("click", deleteCar);
availability.addEventListener("change", logic.availableCars);
sortOptions.addEventListener("change", logic.sortCars);
