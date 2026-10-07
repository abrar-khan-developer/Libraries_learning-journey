import './App.css';
import Invoice from './components/Invoice';
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
    const invoiceRef = useRef();

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imageData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("invoice.pdf");
  };


  return (
    <div className="App">
      <Invoice invoiceRef={invoiceRef}/>
      <button onClick={downloadPDF}>
        Download PDF
      </button>

    </div>
  );
}

export default App;
