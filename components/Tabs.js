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
            

            // stretch adding filtering tabs
            newTab.addEventListener('click', event => {
                
            })
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
        newTab.textContent = text
        const topics = document.querySelector('.topics')
        topics.appendChild(newTab)
    }

    tabMaker('ALL')
