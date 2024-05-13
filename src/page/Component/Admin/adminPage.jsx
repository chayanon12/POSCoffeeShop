import React, { useState, useEffect } from "react";
import DisplayStockTable from "./DisplayStockTable";
import AppBar from "../Header/Appbar";
const AdminPage = () => {
  return (
    <div>
      <AppBar />
      <DisplayStockTable />
    </div>
  );
};

export default AdminPage;
