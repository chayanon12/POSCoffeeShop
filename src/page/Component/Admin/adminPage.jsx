import React, { useState, useEffect } from "react";
import DisplayStockTable from "./DisplayStockTable";
import AppBar from "../Header/Appbar";
const AdminPage = () => {
  return (
    <div>
      <AppBar />
      <DisplayStockTable />
      <h1>Pon2d22</h1>
    </div>
  );
};

export default AdminPage;
