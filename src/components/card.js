import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const { headline, authorName, authorPhoto } = article;
  // define new elements
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContain = document.createElement('img');
  const imageAuthor = document.createElement('div');
  const spanName = document.createElement('span');

  // set up structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageAuthor);
  authorDiv.appendChild(spanName);
  imageAuthor.appendChild(imgContain);

  // add classes
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageAuthor.classList.add('img-container');

  //set text content
  headlineDiv.textContent = headline;
  imgContain.src = authorPhoto;
  spanName.textContent = authorName;


  return cardDiv
}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const mainDiv = document.querySelector(selector);
axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
  let link = res.data.articles;
  link.javascript.forEach(item => {
    mainDiv.appendChild(Card(item));
  })
  link.bootstrap.forEach(item => {
    mainDiv.appendChild(Card(item));
  })
  link.technology.forEach(item => mainDiv.appendChild(Card(item)))

  link.jquery.forEach(item => mainDiv.appendChild(Card(item)))

  link.node.forEach(item => mainDiv.appendChild(Card(item)))
})
.catch(error => console.log(error))
}

export { Card, cardAppender }



     
     

