
// Generates a trust instrument PDF using HTML2PDF or jsPDF
function generatePDF() {
  const type = document.getElementById('instrumentType').value;
  const issuer = document.getElementById('issuer').value;
  const payee = document.getElementById('payee').value;
  const amount = document.getElementById('amount').value;
  const maturity = document.getElementById('maturity').value;
  const terms = document.getElementById('terms').value;
  const output = `
    WRW TRUST INSTRUMENT\n
    Type: ${type}\nIssuer: ${issuer}\nPayee: ${payee}\nAmount: $${amount}\nMaturity: ${maturity}\n\nTerms:\n${terms}
  `;
  const blob = new Blob([output], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `WRW-${type}-${new Date().getFullYear()}.pdf`;
  link.click();
}
