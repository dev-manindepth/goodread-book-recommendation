import "./styles.css";
import { books } from "./data";
import { useState } from "react";

function BookList({ bookList }) {
  return (
    <div className="flex wrap">
      {bookList &&
        bookList.map((book) => {
          return (
            <div className="book" key={book.name}>
              <img src={book.imgUrl} alt="book" className="img-container" />
              <p className="book-name">{book.name}</p>
              <p className="book-rating">{book.rating}/5</p>
            </div>
          );
        })}
    </div>
  );
}
export default function App() {
  const [bookList, setBookList] = useState("");
  return (
    <div className=" container">
      <h1 className="app-heading">
        <span role="img"> 📚 </span> goodbooks
      </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div className="flex gap button-group">
        <button onClick={() => setBookList(books["javascript"])}>
          javascript
        </button>
        <button onClick={() => setBookList(books["fiction"])}>fiction</button>
        <button onClick={() => setBookList(books["bussiness"])}>
          bussiness
        </button>
      </div>
      <hr />
      <BookList bookList={bookList} />
    </div>
  );
}
