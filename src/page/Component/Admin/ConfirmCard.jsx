import React, { useState } from "react";
import { Box, Modal, Button, Typography, Card } from "@mui/material";
import { BungalowTwoTone } from "@mui/icons-material";

function ConfirmCard({ isOpen, onClose, value }) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card sx={{ width: 400 }}>
          <Box sx={{ bgcolor: "background.paper", p: 2 }}>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              Confrim Order
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {value}
            </Typography>
          </Box> 
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>Yes</Button>
            <Button>no</Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
}

export default ConfirmCard;
