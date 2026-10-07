import "./Invoice.css";

function Invoice({ invoiceRef }) {
  return (
    <div ref={invoiceRef} className="invoice">

      <div className="invoice-header">
        <div>
          <h1>ABC Company</h1>
          <p>Pakistan</p>
        </div>

        <div className="invoice-title">
          <h2>INVOICE</h2>
          <p>#INV-001</p>
        </div>
      </div>

      <div className="customer">
        <div>
          <h3>Bill To</h3>
          <p>Ali Khan</p>
          <p>Karachi, Pakistan</p>
        </div>

        <div>
          <h3>Date</h3>
          <p>07 October 2026</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Guar Powder</td>
            <td>10</td>
            <td>Rs. 500</td>
            <td>Rs. 5,000</td>
          </tr>

          <tr>
            <td>Guar Gum</td>
            <td>5</td>
            <td>Rs. 800</td>
            <td>Rs. 4,000</td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        <h3>Total: Rs. 9,000</h3>
      </div>

      <div className="footer">
        <p>Thank you for your business!</p>
      </div>

    </div>
  );
}

export default Invoice;