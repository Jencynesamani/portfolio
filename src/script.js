
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Optionally, show an alert or animation when form is submitted
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! 🚀");
      form.reset();
    });
  }
});
