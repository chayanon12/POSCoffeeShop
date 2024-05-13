import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart } from "@mui/x-charts";
import { Card } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

function pieChart() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/AllStock");
        if (response.status === 200) {
          setTableData(response.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(tableData);

  const data = tableData.map((row, index) => ({
    value: row.quantity,
    label: row.product_name,
  }));
  const data2 = tableData.map((row, index) => ({
    label: row.product_name,
  }));

  return (
    <div>
      <PieChart
        series={[
          {
            arcLabel: (item) => `(${item.value})(${item.label})`,
            arcLabelMinAngle: 100,
            data,
          },
        ]}
        width={400}
        height={200}
        sx={{ fontSize: "10px" }}
      />

      {tableData.map((row, index) => (
        <div
          key={index}
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Array.isArray(row.product_name) &&
              row.map((cell, cellIndex) => (
                <Card
                  key={cellIndex}
                  style={{ margin: "10px", width: "100px", height: "100px" }}
                >
                  {row.product_name}{" "}
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default pieChart;
