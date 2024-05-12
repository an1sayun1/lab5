fetch('books.json')
    .then(response => response.json())
    .then(data => {

        console.log("Title of the first book: " + data[0].title);
        console.log("Author of the second book: " + data[1].author);
        console.log("Genres of all books: " + data.map(book => book.genres).flat().join(", "));
    })
    .catch(error => console.error('Error fetching JSON:', error));