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
            console.log(results)
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