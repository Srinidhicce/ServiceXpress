const Product = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving products");
  }
};

exports.createProducts = async (req, res) => {
  const { title, description, price, category, rating, image } = req.body;
  const product = new Product({
    id: uuidv4(),
    title,
    description,
    price,
    category,
    rating,
    image,
  });
  try {
    await product.save();
    res.status(201).json("Product Created Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error creating product");
  }
};
exports.updateProduct = async (req, res) => {
	const { id } = req.params;
	const { title, description, price, category, rating, image } = req.body;
	try {
		const updatedProduct = await Product.findOneAndUpdate(
			{ id: id },
			{
				title,
				description,
				price,
				category,
				rating,
				image,
			},
			{ new: true }
		);
		if (!updatedProduct) return res.status(404).json("Product not found");
		res.status(500).json("Product updated successfully");
	} catch (e) {
		console.log(e);
	}
};

exports.deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedProduct = await Product.findOneAndDelete({ id: id });
		if (!deletedProduct) return res.status(404).json("Product not found");
		res.status(500).json("Product deleted");
	} catch (e) {
		console.log(e);
	}
};


