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

app.get('/api/ip', (req, res) => {
  try {
    const networkInterfaces = os.networkInterfaces();
    let ipAddress;

    for (const name of Object.keys(networkInterfaces)) {
      for (const net of networkInterfaces[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          ipAddress = net.address;
          break;
        }
      }
    }

    res.status(200).json({ ipAddress });
  } catch (error) {
    console.error("Error ", error.message);
    res.status(500).json({ error });
  }
});

app.get('/get-ip', (req, res) => {
  const clientIp = req.connection.remoteAddress;
  const ip = clientIp.includes(':') ? clientIp.split(':').pop() : clientIp;
  res.send({ ip });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});