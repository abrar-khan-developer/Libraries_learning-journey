import * as XLSX from "xlsx";


function Export() {

     const data = [
        ["Name", "Email", "Age"],
        ["Ali", "k@gmail.com", 25],
        ["Ahmed", "ahmed@gmail.com", 30]
     ];

    function exportToExcel() {
        // 1. Table ko DOM se select karo
        const table = document.getElementById("myTable");

        // 2. HTML table ko Excel worksheet mein convert karo
        const worksheet = XLSX.utils.table_to_sheet(table);

        // 3. Worksheet ke andar workbook banao
        const workbook = XLSX.utils.book_new();

        // 4. Worksheet ko workbook mein add karo
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

        // 5. Excel file download/save karo
        XLSX.writeFile(workbook, "users.xlsx");
    }

    function exportFromArray() {
         

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "UsersArray");

        XLSX.writeFile(workbook, "users.xlsx");
    }

  return (
<>
    <table id="myTable">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>Ali</td>
            <td>ali@gmail.com</td>
            <td>25</td>
            </tr>

            <tr>
            <td>Ahmed</td>
            <td>ahmed@gmail.com</td>
            <td>30</td>
            </tr>
        </tbody>
    </table>

    <button onClick={exportToExcel}>
        Export Excel
    </button>
    <button onClick={exportFromArray}>
        Export from Array
    </button>

</>
  )
}

export default Export
