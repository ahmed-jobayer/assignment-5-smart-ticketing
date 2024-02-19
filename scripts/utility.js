
// Add  hidden to classList

function hideElementById(elementId) {
    const element =document.getElementById(elementId)
    element.classList.add('hidden');
}

// Remove hiddden from class list

function showElementById(elementId) {
    const element =document.getElementById(elementId)
    element.classList.remove('hidden');
}

// Add background color on click

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bgGreen')
}