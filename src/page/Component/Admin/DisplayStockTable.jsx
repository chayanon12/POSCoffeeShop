import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  tableCellClasses,
  Button,
} from "@mui/material";
import ConfirmCard from "./ConfirmCard";
import Sellbox from "./Sellbox";
import FunctionAdmin from "./FunctionAdmin";

function DisplayStockTable() {
  
  const {
    values,
    setValues,
    tableData,
    setTableData,
    StyledTableCell,
    StyledTableRow,
    handleIncrement,
    handleDecrement,
    modalOpen,
    setModalOpen,
    openModal,
    closeModal,
  } = FunctionAdmin();

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: "100px" }}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead sx={{ minWidth: 300 }}>
            <TableRow>
              <StyledTableCell align="center">Product Id</StyledTableCell>
              <StyledTableCell align="center">Product&nbsp;</StyledTableCell>
              <StyledTableCell align="center">
                quantity&nbsp;(Pcs)
              </StyledTableCell>
              <StyledTableCell align="center">
                Price&nbsp;(bath)
              </StyledTableCell>
              <StyledTableCell align="center">Sell</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              <StyledTableCell align="center">Confirm</StyledTableCell>
              <StyledTableCell align="center">Request Product</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 300 }}>
            {tableData.map((row, index) => (
              <StyledTableRow>
                <StyledTableCell align="center">
                  {row.product_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.product_name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.price_per_unit}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Sellbox
                    handleIncrement={() => handleIncrement(index)}
                    handleDecrement={() => handleDecrement(index)}
                  />
                </StyledTableCell>

                <StyledTableCell align="center">
                  {values[index]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={openModal}>Confirm</Button>{" "}
                  <ConfirmCard isOpen={modalOpen} onClose={closeModal} value={values[index]}/>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DisplayStockTable;
