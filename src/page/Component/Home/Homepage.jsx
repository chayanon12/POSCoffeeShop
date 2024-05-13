import React, { useEffect, useState } from "react";

import Appbar from "../Header/Appbar";
import SubCard from "./SubCard";
import MainCard from "./mainCard";
function Homepage() {

  return (
    <div style={{ maxWidth: "1980px", height: "650px", display: "flex" }}>
      <Appbar />
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="HeaderHome"
          style={{ display: "flex", height: "100%", gap: "10px" }}
        >
          <MainCard />
          <SubCard />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
