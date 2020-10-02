// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics

import axios from 'axios'

// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then (res => {
        // console.log(res)
        const tabs = res.data.topics
        // console.log(tabs)
        tabs.forEach(tab => {
            const newTab = document.createElement('div')
            newTab.classList.add('tab')
            newTab.textContent = tab

            
            const cardContainer = document.querySelector('.cards-container')
            console.log(cardContainer)
            // stretch adding filtering tabs
            // newTab.addEventListener('click', filterSelection(tab))
            // end of stretch code

            const topics = document.querySelector('.topics')
            topics.appendChild(newTab)
        })
    })
    .catch(err => {
        console.log(err)
    })

    function tabMaker (text) {
        const newTab = document.createElement('div')
        newTab.classList.add('tab')
        newTab.classList.add('active')
        newTab.textContent = text
        const topics = document.querySelector('.topics')
        topics.appendChild(newTab)

        newTab.addEventListener('click', (c) => {
            let x, i
            x = document.getElementsByClassName('filterDiv')
            // console.log(x)
            if (c === 'ALL') c = ""
            for (i = 0; i< x.length; i++) {
                w3RemoveClass(x[1], 'show')
                if (x[1].className.indexOf(c) > -1) w3AddClass(x[i], "show")
            }
        })
    }

    tabMaker('ALL')

    // Show filtered elements
    function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // filterSelection(tab)
function filterSelection(tab) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == tab) c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  // Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".topics");
var btns = btnContainer.getElementsByClassName("tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//     <div id="myBtnContainer">
//   <button class="btn active" onclick="filterSelection('all')"> Show all</button>
//   <button class="btn" onclick="filterSelection('cars')"> Cars</button>
//   <button class="btn" onclick="filterSelection('animals')"> Animals</button>
//   <button class="btn" onclick="filterSelection('fruits')"> Fruits</button>
//   <button class="btn" onclick="filterSelection('colors')"> Colors</button>
// </div>