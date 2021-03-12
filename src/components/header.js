

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//define new elements:
const divHeader = document.createElement('div');
const spanDate = document.createElement('span');
const titleH = document.createElement('h1');
const spanTemp = document.createElement('span');

//structure new elements:
divHeader.appendChild(spanDate);
divHeader.appendChild(titleH);
divHeader.appendChild(spanTemp);

//add classes
divHeader.classList.add('header');
divHeader.classList.add('date');
divHeader.classList.add('temp');

//set text content
spanDate.textContent = date;
titleH.textContent = title;
spanTemp.textContent = temp;

return divHeader
}

function headerAppender(selector) {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const headAppend = document.querySelector(selector);
  headAppend.appendChild(Header("Lambda Times", "Jan 6, 2021", "26°"));
  return headAppend
}




export { Header, headerAppender }
