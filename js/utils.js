let words = ['book', 'bookworm', 'Bible',
    'bookish','cookbook', 'bookstore', 'pocketbook'];

let pattern = /book/;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`the ${word} matches`);
    }
});