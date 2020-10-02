// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
import axios from 'axios'

// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//

function cardMaker(object) {
    //instantiate elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    //adding classes to cards
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')


    //appending heirachy
    imageContainer.appendChild(image)
    author.appendChild(imageContainer)
    author.appendChild(authorName)
    card.appendChild(headline)
    card.appendChild(author)

    //content in cards
    headline.textContent = object.headline
    image.src = object.authorPhoto
    authorName.textContent = object.authorName

    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    card.addEventListener('click', event => {
        console.log(headline.textContent)
    })

    return card
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res)
        const bootstrap = res.data.articles.bootstrap
        const javascript = res.data.articles.javascript
        const jquery = res.data.articles.jquery 
        const node = res.data.articles.node
        const technology = res.data.articles.technology

        bootstrap.forEach(object => {
            const newCard = cardMaker(object)
            newCard.classList.add('bootstrap')
            const cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(newCard)
        })
        javascript.forEach(object => {
            const newCard = cardMaker(object)
            newCard.classList.add('javascript')
            const cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(newCard)
        })
        jquery.forEach(object => {
            const newCard = cardMaker(object)
            newCard.classList.add('jquery')
            const cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(newCard)
        })
        node.forEach(object => {
            const newCard = cardMaker(object)
            newCard.classList.add('node')
            const cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(newCard)
        })
        technology.forEach(object => {
            const newCard = cardMaker(object)
            newCard.classList.add('technology')
            const cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(newCard)
        })
    })
    .catch(err => {
        const error = document.createElement('p')
        error.textContent = `${err}, failure to retrieve articles`
        const errorContainer = document.querySelector('.errors-container')
        errorContainer.appendChild(error)
    })
    


// Use your function to create a card for each of the articles, and append each card to the DOM.
