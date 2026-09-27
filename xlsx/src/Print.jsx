"use client";

import * as XLSX from "xlsx";
import { useState } from "react";

function Print() {
    
  const [data, setData] = useState([]);

  function readExcelFile(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      // Excel file ko read karo
      const workbook = XLSX.read(e.target.result, {
        type: "array",
      });

      // Pehli Excel sheet lo
      const sheetName = workbook.SheetNames[0];

      // Worksheet nikalo
      const worksheet = workbook.Sheets[sheetName];

      // Worksheet ko JavaScript array/object mein convert karo
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Data ko state mein store karo
      setData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <>
      {/* Excel file select karo */}
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={readExcelFile}
      />

      {/* Excel ka data table mein show karo */}
      {data.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(data[0]).map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Print;

