document.getElementById('instrumentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const trust = this.trustName.value;
  const type = this.type.value;
  const amount = this.amount.value;
  const maturity = this.maturity.value;

  const result = `
    <h2>${type} Issued</h2>
    <p><strong>Trust:</strong> ${trust}</p>
    <p><strong>Amount:</strong> $${amount}</p>
    <p><strong>Maturity:</strong> ${maturity}</p>
    <p><strong>Status:</strong> ✅ Drafted</p>
  `;

  document.getElementById('outputArea').innerHTML = result;
});
