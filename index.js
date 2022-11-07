class Users {
  books;
  constructor(name, lastName, city) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.books = [];
  }
  addBook(bookName) {
    this.books.push(bookName);
  }
}

class Bilan {
  constructor() {
    this.user = [];
  }
  addUser(user) {
    this.user.push(user);
  }
  printArrBooks() {
    for (let i = 0; i < this.user.length; i++) {
      console.log(this.user[i].books);
    }
  }
}
let a = new Users("daniel", "Ohana", "Netanya");
let b = new Users("shany", "Ohana", "Netanya");
a.addBook("genesis");
a.addBook("exodus");
a.addBook("levitic");
a.addBook("numbers");
a.addBook("deteronome");
b.addBook("shmouel");
b.addBook("iyov");
b.addBook("Ovadia");
b.addBook("Daniel");
b.addBook("Yoel");

let bilan1 = new Bilan();

bilan1.addUser(a);
bilan1.addUser(b);
bilan1.printArrBooks();
