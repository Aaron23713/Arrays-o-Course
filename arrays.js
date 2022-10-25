console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
const courseToCard = ({prefix, numner, title, url, desc, prereqs, credits}) => {
    const courseTemplate = `<div class = "col">
    div class = "card style = "width: 18rem;">
    h3 class = "card-header">${prefix}</h3>
    <div class = "card-body">
    <h5 class = "card-title">${prefix} ${number}</h5>
    <p class = "card-text"> ${desc}</p>
    </div>
    </div>
    </div>`;
    return courseTemplate;
}

const courseCards = data.items.map(courseToCard).forEach((c) => document.write(c));

const searchButton = document.getElementById("search-btn")
searchButton.addEventListener("click", (ev) => {
    console.log(ev)
    ev.preventDefault();
    console.log("query text")
    const searchField = document.querySelector('input[name = "query-text"]');
    const queryText = searchField.value;
    console.log(queryText);
    const filteredCourseCards = courseCards.filter((card) =>
    filteredCourseCards(card, queryText)
);
console.log('filteredCourseCards', filteredCourseCards);
filteredCourseCards.forEach((card) => {
    document.write(card);
});
});








const searchField = document.querySelector('"input[name="query-text"]');


 searchField.addEventListener("input", (ev) => {
      console.log(ev);
      ev.preventDefault();

      console.log("query text");

      const queryText = searchField.value;
      console.log(queryText);


      )




 }









}



    

// 2. maybe we only show those that match the search query?

// 3. we update the result count and related summary info as we filter