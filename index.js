class Users {
  #books;
  constructor(name, lastName, city) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.#books = [];
  }
  addBook(bookName) {
    this.#books.push(bookName);
  }
  printBooks() {
    this.#books.forEach((element) => {
      console.log(element);
    });
  }
}

class Books {
  constructor() {}
}

class Bilan {
  constructor() {}
}
let a = new Users("daniel", "Ohana", "Netanya");
a.addBook("genesis");
a.addBook("exodus");
a.addBook("levitic");
a.addBook("numbers");
a.addBook("deteronome");
a.printBooks();
console.log(a);
