import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>support@bookstore.com</p>
          </div>
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>123 Book Street, Reading City, 560001</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
