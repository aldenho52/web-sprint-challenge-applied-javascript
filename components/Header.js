// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(dateText, temp) {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temperature = document.createElement('span')

    header.classList.add('header')
    date.classList.add('date')
    temperature.classList.add('temp')

    date.textContent = dateText
    h1.textContent = 'Lambda Times'
    temperature.textContent = temp

    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temperature)

    return header
}

const headerContainer = document.querySelector('.header-container')
const lambdaTimes = Header('MARCH 28, 2020', '98°')
headerContainer.appendChild(lambdaTimes)

console.log('hello')

