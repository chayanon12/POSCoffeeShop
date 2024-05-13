const { ConnectDB, DisconnectDB } = require("../DBService/Service.cjs");

module.exports.SellProduct = async function (req, res) {
  try {
    const { productId, quantity } = req.body;
    const client = await ConnectDB();
    let query = "";
    query += "UPDATE traceability.temp_chaynon_4 SET quantity = quantity - $1 WHERE product_id = $2 RETURNING *";
    const result = await client.query(query, [quantity, productId]);
    if (result.rows.length > 0) {
      const updatedProduct = result.rows[0];
      if (updatedProduct.quantity < 200) {
        console.log(`Product ID ${productId} is running low on stock. Remaining stock: ${updatedProduct.quantity}`);
        res.status(200).json({
          message: `Successfully sold productID ${productId} with ${quantity} pieces`,
          Warning: `ProductID ${productId} Remaining stock: ${updatedProduct.quantity} Please restock soon.`
        });
      }else{
        console.log(`Product ID ${productId} Remaining stock: ${updatedProduct.quantity}`);
        res.status(200).json({
          message: `Successfully sold product ID ${productId} with total ${quantity} pieces`,
        });
      }      
    } else {
      res.status(404).json({ error: `Product with ID ${productId} not found` });
    }
    await DisconnectDB(client);
  } catch (error) {
    console.error("Error updating stock:", error.message);
    res.status(500).json({ error: "An error occurred while updating stock." }); 
  }
};

module.exports.AddProductToStock = async function (req, res) {
    try {
      const { productId, quantity } = req.body;
      const client = await ConnectDB();
      let query = "";
      query += "UPDATE traceability.temp_chaynon_4 SET quantity = quantity + $1 WHERE product_id = $2";
      const result = await client.query(query, [quantity, productId]);
      res.status(200).json(`Add productID ${productId} Total ${quantity} Piece`);
      await DisconnectDB(client);
    } catch (error) {
      console.error("Error updating stock:", error.message);
      res.status(500).json({ error: "An error occurred while updating stock." }); 
    }
  };
