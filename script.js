const inputs = document.querySelectorAll('.settings__input');

// Function to handle updates when an input changes
function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // Check if there's a suffix like px
  document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix); // Update the CSS variable
}

// Apply event listeners with debouncing for performance
inputs.forEach(input => {
  input.addEventListener('input', handleUpdate); // 'input' works for both change and mousemove
});