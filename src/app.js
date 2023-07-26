const icons = ["♦", "♥", "♠", "♣"];
//icons[1].style.color = "red";
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

function randomElement(anyArray) {
  const indexElement = Math.floor(Math.random() * anyArray.length);
  return anyArray[indexElement];
}

// Card body
const cardBody = document.getElementById("cardBody");
cardBody.style.display = "flex";
cardBody.style.flexDirection = "column";
cardBody.style.justifyContent = "space-between";

// Icon 1
const icon = document.createElement("i");
icon.innerText = randomElement(icons);
icon.style.fontSize = "600%";
icon.style.paddingLeft = "20px";
cardBody.appendChild(icon);

// Number/Letter
const number = document.createElement("span");
number.innerText = randomElement(numbers);
number.style.fontSize = "600%";
number.style.display = "flex";
number.style.justifyContent = "center";
cardBody.appendChild(number);

//Icon 2
const result = (icon.innerText = randomElement(icons));
const icon2 = document.createElement("i");
icon2.innerText = result;
icon2.style.fontSize = "600%";
icon2.style.display = "flex";
icon2.style.justifyContent = "flex-end";
icon2.style.paddingRight = "20px";
cardBody.appendChild(icon2);

// Falta poner el [ícono inferior invertido] y el corazón rojo.
