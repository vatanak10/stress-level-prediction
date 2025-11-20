function validateForm() {
  const inputs = document.querySelectorAll('input[type="range"]');

  for (const input of inputs) {
    const value = parseFloat(input.value);
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);

    if (isNaN(value) || value < min || value > max) {
      const fieldName = input.name
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      alert(`Please enter a valid value for ${fieldName} (${min}-${max}).`);
      input.focus();
      return false;
    }
  }

  return true;
}

// Update range slider values
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input[type="range"]');

  inputs.forEach((input) => {
    const value = document.querySelector(`#${input.id}_value`);

    input.addEventListener("input", (event) => {
      value.textContent = event.target.value;
    });
  });
});
