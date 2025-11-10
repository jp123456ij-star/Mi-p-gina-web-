// Mostrar año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Simulación de formulario
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value || "Amigo/a";
  document.getElementById("formNotice").textContent =
    `Gracias ${name}, tu mensaje ha sido enviado.`;
});