// const express = require("express");
// const Product = require("../models/Product");

// const router = express.Router();

// Get all products
// router.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });



// Get single product by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (error) {
//     res.status(404).json({ message: "Product not found" });
//   }
// });


// Add product
// router.post("/", async (req, res) => {
//   const product = new Product(req.body);
//   await product.save();
//   res.json(product);
// });

// module.exports = router;




const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* =========================
   GET all products
========================= */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   GET single product by ID
========================= */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
});

/* =========================
   POST add product
========================= */
router.post("/", async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    if (!name || !price || !image || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   PUT update product
========================= */
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }   // return updated product
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

  //  DELETE product

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
