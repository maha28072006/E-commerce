// import { useParams } from "react-router-dom";
// import { products } from "../productsData";


// function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find(item => item._id === Number(id));

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{product.name}</h2>

//       <img
//         src={product.image}
//         alt={product.name}
//         style={{ width: "300px", borderRadius: "10px" }}
//       />

//       <h3>Price: {product.price}</h3>
//       <p>{product.description}</p>
//     </div>
//   );
// }

// export default ProductDetails;








// import { useParams } from "react-router-dom";
// import { products } from "../productsData";

// function ProductDetail() {
//   const { id } = useParams();
  
//   const product = products.find(p => p._id === id);

//   if (!product) {
//     return <h2>Product not found!</h2>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p><strong>Price:</strong> ₹{product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductDetail;


// import { useParams, Link } from "react-router-dom";
// import { products } from "../productsData";

// function ProductDetail({ addToCart }) {
//   const { id } = useParams();

//   const product = products.find(
//     (p) => String(p._id) === String(id)
//   );

//   if (!product) return <h2>Product not found</h2>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>{product.name}</h2>
//       <img src={product.image} width="300" />
//       <p>{product.description}</p>

//       <button onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>

//       <br /><br />
//       <Link to="/products">⬅ Back</Link>
//     </div>
//   );
// }

// export default ProductDetail;





// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail({ addToCart }) {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(p => p._id === id);
//         setProduct(found);
//       });
//   }, [id]);

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>{product.name}</h2>
//       <img src={product.image} width="300" />
//       <p>{product.description}</p>
//       <p>{product.price}</p>

//       <button onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>

//       <br /><br />
//       <Link to="/products">⬅ Back</Link>
//     </div>
//   );
// }

// export default ProductDetail;







import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} width="300" />
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
