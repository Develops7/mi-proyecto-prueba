
function generatePDF(email, content) {
  const doc = new jsPDF();
  doc.text("Resultados del Test - DEVELOPS.ORG", 10, 10);
  doc.text(content, 10, 30);
  doc.save("resultados-test.pdf");
  sendEmail(email, content);
}
