import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
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
import axios from "axios";
import ConfirmCard from "./ConfirmCard";
import { AddLinkSharp, LeakAddSharp } from "@mui/icons-material";
function FunctionAdmin() {
  const [tableData, setTableData] = useState([]);
  const [values, setValues] = useState(Array(tableData.length).fill(0));
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("/api/AllStock");
        if (response.status === 200) {
          setTableData(response.data);
          setValues(Array(response.data.length).fill(0));
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [1]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#68c4af",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const handleIncrement = (index) => {
    const newValues = [...values];
    newValues[index] += 1;
    setValues(newValues);
  };

  const handleDecrement = (index) => {
    const newValues = [...values];
    if (newValues[index] > 0) {
      newValues[index] -= 1;
      setValues(newValues);
    }
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return {
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
  };
}

export default FunctionAdmin;
