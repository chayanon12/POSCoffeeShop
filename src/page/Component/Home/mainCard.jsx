import React from "react";
import { Card } from "@mui/material";
function mainCard() {
  const colorBgcard1 = {
    bgcolor: "white",
    width: "1200px",
  };
  return (
    <Card sx={colorBgcard1}>
      <h1>Stock Report</h1>
    </Card>
  );
}

export default mainCard;
