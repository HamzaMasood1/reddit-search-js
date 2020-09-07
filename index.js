import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


//Form event listener
searchForm.addEventListener('submit', (e) => {
    //get search term
    const searchTerm = searchInput.value;
    console.log(searchTerm);
    e.preventDefault();
    //get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    console.log(sortBy);
    //get limit
    const searchLimit = document.getElementById('limit').value;
    console.log(searchLimit);

    //check input
    if (searchTerm == '') {
        showMessage('Please add a search term', 'alert-danger');
    }

    //clear input
    searchInput.value = '';

    //search reddit
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            console.log(results);
            let output = '<div class="card-columns>';
            //loop through posts
            results.forEach(post => {
                output += `
                <div class=" card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${ post.title} </h5>
                <p class="card-text">${post.selftext}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                `
            })
            output += '</div>'
            document.getElementById('results').innerHTML = output;
        });


    e.preventDefault();

});

//show message
function showMessage(message, className) {
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //get parent container
    const searchContainer = document.getElementById('search-container');
    //get search
    const search = document.getElementById('search');
    //insert message
    searchContainer.insertBefore(div, search);
    //Timeout alert
    setTimeout(() => document.querySelector('.alert').remove(), 3000);

}
