
function generateAffidavit(type, issuer, payee, amount) {
  const date = new Date().toLocaleDateString();
  return `AFFIDAVIT OF TRUST INSTRUMENT\n\n` +
         `I, ${issuer}, hereby declare under full commercial liability and penalty of perjury that the following instrument ` +
         `has been issued on this day, ${date}, to ${payee} in the amount of $${amount}, in good faith and full trust.` +
         `\n\n[Executor Signature] ______________________\n\n[Thumbprint] ______________\n[Trust Seal] ______________`;
}
