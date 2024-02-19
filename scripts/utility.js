// Add  hidden to classList

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// Remove hiddden from class list

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// Add background color on click

function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bgGreen");
}

// changing of seat count

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Append seat info in the page
function addSeatToPurchased(seatName, seatClass, SeatPrice) {
  const purchasedSeatContainer = document.getElementById("purchasedSeat");
  // set a div to append
  const setDiv = document.createElement("div");
  setDiv.classList.add("flex", "justify-between");
  // add 3 paragraph tag
  const seatNameElement = document.createElement("p");
  seatNameElement.innerText = seatName;
  const seatClassElement = document.createElement("p");
  seatClassElement.innerText = seatClass;
  const seatPriceElement = document.createElement("p");
  seatPriceElement.innerText = SeatPrice;
  //   Append paragraph tag to setDiv
  setDiv.appendChild(seatNameElement);
  setDiv.appendChild(seatClassElement);
  setDiv.appendChild(seatPriceElement);
  // Append setDiv to the purchased seats container
  purchasedSeatContainer.appendChild(setDiv);
}
