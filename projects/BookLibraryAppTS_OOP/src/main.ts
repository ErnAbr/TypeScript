import { getAllBooks } from "./services.js";

async function main() {
  const books = await getAllBooks("https://freetestapi.com/api/v1/books");
  console.log(books);
}

main();
