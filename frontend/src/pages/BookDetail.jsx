
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail({ addToCart }) {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{product.name}</h2>
//       <img src={product.image} width="300" />
//       <p>{product.description}</p>
//       <p>{product.price}</p>

//       <button onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;


import "./BookDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetail({ addToCart }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading book details...</div>;
  if (!book) return <div className="error">Book not found</div>;

  return (
    <div className="book-detail-container">
      <div className="book-detail">
        <img src={book.image} alt={book.title} />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p className="author"><strong>Author:</strong> {book.author}</p>
          <p className="description">{book.description}</p>
          <p className="price"><strong>Price:</strong> ₹{typeof book.price === 'string' ? book.price.replace('₹', '') : book.price}</p>
          <button onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
