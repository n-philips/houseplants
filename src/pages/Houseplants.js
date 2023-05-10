import { AgGridReact } from "ag-grid-react";
import "../../node_modules/ag-grid-community/styles/ag-grid.css";
import "../../node_modules/ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Houseplants.module.css";
import Details from "./Details";

function Houseplants() {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState();

  const columnDefs = [
    { field: "Latin name", filter: true },
    { field: "Family" },
    { field: "Categories", filter: true },
  ];

  useEffect(() => {
    const url = "https://house-plants2.p.rapidapi.com/all-lite";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c70b55e843msh08ff0eacc020005p1047acjsnf4d23e0db108",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  function getSelectedRowData() {}

  return (
    <section>
        <h1 className={classes.heading}>Houseplants</h1>

      <datalist id="dList">
        <options></options>
      </datalist>
      <div
        className="ag-theme-alpine"
        style={{ height: 500, width: 620, margin: "auto" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="single"
          onRowSelected={getSelectedRowData}
          onRowDoubleClicked={(e) => navigate("/details")}
        />
      </div>
    </section>
  );
}

export default Houseplants;
