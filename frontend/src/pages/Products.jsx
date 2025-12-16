// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Products({ addToCart }) {
//   const [products, setProducts] = useState([]);

//   // Fetch products from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products</h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map(product => (
//           <div
//             key={product._id}
//             style={{
//               width: "200px",
//               border: "1px solid black",
//               padding: "10px"
//             }}
//           >
//             <Link
//               to={`/product/${product._id}`}
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "100%", height: "120px" }}
//               />
//               <h4>{product.name}</h4>
//             </Link>

//             <p>{product.price}</p>

//             <button onClick={() => addToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(product => (
          <div
            key={product._id}
            style={{
              width: "200px",
              border: "1px solid white",
              padding: "10px"
            }}
          >
            <Link
              to={`/product/${product._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "120px" }}
              />
              <h4>{product.name}</h4>
            </Link>

            <p>{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

