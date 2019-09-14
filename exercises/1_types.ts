const array: number[] = [1, 2, 3, 4, 5];

type SquaredNumber = number;
type DoubledNumber = number;

function squareNumber(num: number): SquaredNumber {
  return num * num;
}

const squared: SquaredNumber[] = array.map(squareNumber);

squared; // [1, 4, 9, 16, 25]
array; // [1, 2, 3, 4, 5]

const doubled: DoubledNumber[] = array.map((num: number): DoubledNumber => num * 2); // [2, 4, 6, 8, 10]

type BookName = string;

interface Book {
  name: BookName;
  description: string;
  price: number;
}

const books: Book[] = [
  {
    name: "JavaScript: The Definitive Guide",
    description: `Since 1996, JavaScript: The Definitive Guide...`,
    price: 28.89
  },
  {
    name: "Eloquent JavaScript",
    description: `JavaScript lies at the heart...`,
    price: 21.22
  },
  {
    name: "JavaScript: The Good Parts",
    description: `Most programming languages...`,
    price: 16.59
  }
];

const getTitle: (book: Book) => BookName = book => book.name;

const titles: BookName[] = books.map(getTitle);

const titlesOfExpensiveBooks: BookName[] = books.filter(book => book.price > 20).map(getTitle);
