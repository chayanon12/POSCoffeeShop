const { ConnectDB, DisconnectDB } = require("../DBService/Service.cjs");
const os = require("os");
module.exports.getDataTable = async function (req, res) {
  try {
    const client = await ConnectDB();
    let query = "";
    query += "SELECT transaction_id, product_id, quantity, transaction_date, price_per_unit,product_name ";
    query += "FROM traceability.temp_chaynon_4";
    const { rows } = await client.query(query);
    res.status(200).json(rows);
    await DisconnectDB(client);
  } catch (error) {
    console.error("Error querying PostgreSQL:", error.message);
    res.status(500).json({ error: "An error occurred while querying the database." });
  }
};


