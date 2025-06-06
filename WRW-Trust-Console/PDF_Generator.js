
function generatePDF() {
  const type = document.getElementById('instrumentType').value;
  const issuer = document.getElementById('issuer').value;
  const payee = document.getElementById('payee').value;
  const amount = document.getElementById('amount').value;
  const maturity = document.getElementById('maturity').value;
  const terms = document.getElementById('terms').value;
  const template = getInstrumentTemplate(type);
  const affidavit = generateAffidavit(type, issuer, payee, amount);
  const content = `
    WILLIAM RAYEH WATLEY TRUST – ${type}
    Issuer: ${issuer}
    Payee: ${payee}
    Amount: $${amount}
    Maturity: ${maturity}

    TERMS:
    ${terms}

    TEMPLATE:
    ${template}

    ${affidavit}
  `;
  const blob = new Blob([content], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `WRW-${type}-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}.pdf`;
  link.click();
}
