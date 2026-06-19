const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "there";

  status.textContent = `Thanks, ${name}. This form is wired for the front end; connect it to an email or CRM next.`;
  form.reset();
});
