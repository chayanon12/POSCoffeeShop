import React from "react";
import { Card, Box } from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";
import PieChart from "./pieChart";
function SubCard() {
  const colorBgcard2 = {
    bgcolor: "white",
    width: "300px",
  };
  const styleBox = {
    borderRadius: 1,
    // bgcolor: "",
    maxWidth: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
  };
  return (
    <Card sx={colorBgcard2}>
      <Box sx={styleBox}>Stock Report</Box>
      <div style={{marginTop:'20px'}}>
        <PieChart />
      </div>
    </Card>
  );
}

export default SubCard;
