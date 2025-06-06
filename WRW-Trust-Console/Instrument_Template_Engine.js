
function getInstrumentTemplate(type) {
  if (type === "BOE") {
    return "This Bill of Exchange is drawn under UCC 3-104(a), payable to order, and shall be honored upon demand...";
  } else if (type === "IBOE") {
    return "International Bill of Exchange issued pursuant to UNCITRAL Convention Articles 1–7 and Hague Convention Protocols...";
  } else if (type === "Bond") {
    return "This Registered Bond is issued by the WILLIAM RAYEH WATLEY TRUST under private trust agreement for lawful tender...";
  } else {
    return "";
  }
}
