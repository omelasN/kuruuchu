document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Function to handle the search action
    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Perform search action (e.g., redirect to search results page)
            window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search query.');
        }
    }

    // Add event listener to the search button
    searchButton.addEventListener('click', handleSearch);

    // Add event listener to handle Enter key press in the search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });
});