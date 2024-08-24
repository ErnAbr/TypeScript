// https://freetestapi.com/api/v1/books // internet page: https://freetestapi.com/apis/books

import { BookService } from "./services.js";

class BookApp {
  private bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  public async run(): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      console.log("Books:", books);
      this.renderBooks(books);
    } catch (error) {
      console.error("Failed to load books:", error);
    }
  }

  private renderBooks(books: any[]): void {
    throw new Error("Implement the Method");
  }
}

const bookService = new BookService("https://freetestapi.com/api/v1/books");
const app = new BookApp(bookService);

app.run();
