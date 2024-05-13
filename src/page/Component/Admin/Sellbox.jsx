import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Sellbox({ handleIncrement, handleDecrement }) {
  const button = [
    <Button key="Add" onClick={handleIncrement}>
      <AddCircleIcon />
    </Button>,
    <Button key="Remove" onClick={handleDecrement} >
      {" "}
      <RemoveCircleIcon />
    </Button>,
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
        color="secondary"
      >
        {button}
      </ButtonGroup>
    </div>
  );
}

export default Sellbox;
