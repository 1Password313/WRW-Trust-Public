
// Simulates QR and IPFS hash generation for document sealing
function generateQR() {
  const data = new Date().toISOString() + Math.random().toString(36).substring(2);
  const hash = btoa(data).slice(0, 24); // Simulated IPFS-style hash
  alert("IPFS Hash (Simulated): " + hash);
}
