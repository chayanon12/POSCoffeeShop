import React, { StrictMode } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminPage from "./page/Component/Admin/adminPage";

import axios from "axios";

const backendUrl = "http://localhost:4000";
axios.defaults.baseURL = backendUrl;
const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          {/* <Route path="/AdminStore" element={<AdminPage />} /> */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
