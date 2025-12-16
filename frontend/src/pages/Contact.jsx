// function Contact() {
//   return (
//     <div className="container">
//       <h1>Contact Page</h1>

//       <div className="highlight">
//         Welcome to our Home page..
//       </div>

//       <p>We Selling the products...</p>

//       <p>Email: support@gmail.com</p>
//       <p>Phone: +91 9876543210</p>
//       <p>Location: India</p>
//     </div>
//   );
// }

// export default Contact;



import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      {/* TOP BANNER */}
      <div className="contact-banner">
        <h1>CONTACT US</h1>
        <p>
          Need an expert? You are more than welcome to leave your contact
          info and we will be in touch shortly.
        </p>
      </div>

      {/* CONTACT BOXES */}
      <div className="contact-boxes">

        <div className="box">
          <h3>🏠 VISIT US</h3>
          <p>2 Elms Street, London, UK</p>
        </div>

        <div className="box">
          <h3>📞 CALL US</h3>
          <p>+44 (0) 20 3156 7711</p>
        </div>

        <div className="box">
          <h3>✉ CONTACT US</h3>
          <p>support@gmail.com</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;
