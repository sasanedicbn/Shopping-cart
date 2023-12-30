import { cars } from "./data";
const car = document.querySelector(".car");

cars.forEach((data) => {
  const nameDiv = document.createElement("div");

  // Kreiraj i postavi HTML za svako ime
  nameDiv.innerHTML = `<p>${data.name}</p>`;

  // Dodaj div sa imenom u kontejner
  car.appendChild(nameDiv);
});
