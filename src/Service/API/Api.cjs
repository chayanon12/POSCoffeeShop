const express = require("express");
const os = require('os');
const DataService = require("../ManageData/FetchData.cjs");
const UpdateService = require("../UpdateData/UpdateData.cjs");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());


app.get("/api/AllStock", DataService.getDataTable);
app.post("/api/SellProduct", UpdateService.SellProduct);
app.post("/api/AddProductToStock", UpdateService.AddProductToStock);


app.get('/get-ip', (req, res) => {
  const clientIp = req.connection.remoteAddress;
  const ip = clientIp.includes(':') ? clientIp.split(':').pop() : clientIp;
  res.send({ ip });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});