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
}
