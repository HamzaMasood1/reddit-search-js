const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    //get search term
    const searchTerm = searchInput.value;
    console.log(searchTerm);
    e.preventDefault();

})