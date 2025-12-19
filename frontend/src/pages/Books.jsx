// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import "./Books.css";

// // Backend API URL
// const API_URL = `${import.meta.env.VITE_API_URL}/api/books`;

// function Books({ addToCart }) {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch books from backend
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(API_URL);

//         // Backend returns array of books
//         setBooks(response.data);
//         setFilteredBooks(response.data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // Search functionality
//   const handleSearch = (searchTerm) => {
//     if (!searchTerm.trim()) {
//       setFilteredBooks(books);
//     } else {
//       const filtered = books.filter(
//         (book) =>
//           book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           book.author.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBooks(filtered);
//     }
//   };

//   // Loading state
//   if (loading) {
//     return <div className="loading">Loading books...</div>;
//   }

//   return (
//     <div className="books-container">
//       <h2>Our Book Collection</h2>

//       <SearchBar onSearch={handleSearch} />

//       <div className="books-grid">
//         {filteredBooks.map((book) => (
//           <div key={book.id} className="book-card">
//             <Link to={`/book/${book.id}`}>
//               <img src={book.image} alt={book.title} />
//               <h4>{book.title}</h4>
//             </Link>

//             <p className="author">by {book.author}</p>
//             <p className="price">₹{book.price}</p>

//             <button onClick={() => addToCart(book)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {filteredBooks.length === 0 && (
//         <div className="no-results">
//           <p>No books found matching your search.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Books;



import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Books.css";

// Backend API URL (from .env)
const API_URL = `${import.meta.env.VITE_API_URL}/api/books`;

function Books({ addToCart }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL);

        // Backend returns an array of books
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [API_URL]);

  // Search functionality
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  // Loading state
  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div className="books-container">
      <h2>Our Book Collection</h2>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Books Grid */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book._id} className="book-card">
            <Link to={`/book/${book._id}`}>
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
            </Link>

            <p className="author">by {book.author}</p>
            <p className="price">₹{book.price}</p>

            <button onClick={() => addToCart(book)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredBooks.length === 0 && (
        <div className="no-results">
          <p>No books found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default Books;
