// Hide main show success page

function next() {
  hideElementById("primarySection");
  showElementById("successSection");
}

// Hide success page show main page

function continueBuying() {
  hideElementById("successSection");
  showElementById("primarySection");
}

// Add background color on click

function addBackgroundColorA1() {
  addBackgroundColorById("a1");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("A1", "Economoy", "550");
}
function addBackgroundColorA2() {
  addBackgroundColorById("a2");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("A2", "Economoy", "550");
}
function addBackgroundColorA3() {
  addBackgroundColorById("a3");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("A3", "Economoy", "550");
}
function addBackgroundColorA4() {
  addBackgroundColorById("a4");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("A4", "Economoy", "550");
}
function addBackgroundColorB1() {
  addBackgroundColorById("b1");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("B1", "Economoy", "550");
}
function addBackgroundColorB2() {
  addBackgroundColorById("b2");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("B2", "Economoy", "550");
}
function addBackgroundColorB3() {
  addBackgroundColorById("b3");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("B3", "Economoy", "550");
}
function addBackgroundColorB4() {
  addBackgroundColorById("b4");
  // update available seat
  const currentSeat = getTextElementValueById("seatRemained");
  const availableSeat = currentSeat - 1;
  setTextElementValueById("seatRemained", availableSeat);
  // update selected seat
  const currentSelectedSeat = getTextElementValueById("seatSelected");
  const selectedSeatCount = currentSelectedSeat + 1;
  setTextElementValueById("seatSelected", selectedSeatCount);
  // Add the selected seat
  addSeatToPurchased("B4", "Economoy", "550");
}
