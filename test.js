
document.getElementById("testForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;

  const results = `
    Resultados del Test:
    - Pregunta 1: ${q1}
    - Pregunta 2: ${q2}
  `;
  document.getElementById("resultContainer").textContent = results;
  generatePDF(email, results);
});
