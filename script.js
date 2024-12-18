function calculateCPA() {
  const CPC = parseFloat(document.getElementById("cpc").value);
  const optinCR = parseFloat(document.getElementById("optinCR").value) / 100;
  const optinToCallCR = parseFloat(document.getElementById("optinToCallCR").value) / 100;
  const callToSaleCR = parseFloat(document.getElementById("callToSaleCR").value) / 100;

  if (!CPC || !optinCR || !optinToCallCR || !callToSaleCR) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const optinCPA = CPC / optinCR;
  const callCPA = optinCPA / optinToCallCR;
  const saleCPA = callCPA / callToSaleCR;

  document.getElementById("optinCPA").textContent = `$${optinCPA.toFixed(2)}`;
  document.getElementById("callCPA").textContent = `$${callCPA.toFixed(2)}`;
  document.getElementById("saleCPA").textContent = `$${saleCPA.toFixed(2)}`;
}
