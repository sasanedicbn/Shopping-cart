import { cars } from "./data";
const car = document.querySelector(".car");

cars.forEach((data) => {
  const nameDiv = document.createElement("div");

  // Kreiraj i postavi HTML za svako ime
  nameDiv.innerHTML = `<div class="cart-row"> 
  <h1>${data.name}</h1>
 <img src = "${data.image}" alt="${data.image}"/>
   <p><strong>Brand:</strong> ${data.brand}</p>
  <p><strong>Manufactured Year:</strong> ${data.manufacturedYear}</p>
  <p><strong>Doors:</strong> ${data.doors}</p>
  <p><strong>Price:</strong> $${data.price}</p>
  <p><strong>Available:</strong> ${data.available ? "Yes" : "No"}</p>
  <hr>
  </div>
`;

  // Dodaj div sa imenom u kontejner
  car.appendChild(nameDiv);
});
