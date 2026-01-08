const data = {
  authors: [
    { id: "author-1", name: "John Doe", books: ["book-1", "book-2"] },
    { id: "author-2", name: "Jane Doe", books: ["book-3"] }
  ],
  books: [
    { id: "book-1", title: "Book-1 Doe", year: 2002, author: "author-1" },
    { id: "book-2", title: "Book-2 Doe", year: 2002, author: "author-1" },
    { id: "book-3", title: "Book-3 Doe", year: 2002, author: "author-2" },
  ]
}


export const resolvers = {
  Book: {
    author: (p, a, c, i) => {
      return data.authors.find((author) => author.id === p.author)
    }
  },
  Author: {
    books: (p, a, c, i) => {
      return data.books.filter((book) => p.books.includes(book.id))
    }
  },
  Query: {
    authors: (p, a, c, i) => (data.authors),
    books: (p, a, c, i) => (data.books)
  },
  Mutation: {
    addBook: (p, a, c, i) => {
      console.log(a)
      const newBook = { id: Date.now().toString(), ...a }
      data.books.push(newBook)
      return newBook
    }
  }
}