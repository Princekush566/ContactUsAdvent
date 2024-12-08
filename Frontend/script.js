  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const contactInput = document.getElementById("contact");
    const emailInput = document.getElementById("email");
    const orgInput = document.getElementById("org");
    const messageInput = document.getElementById("message");
    const captchaCheckbox = document.getElementById("captcha");

    
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      
      document.querySelectorAll(".error-message").forEach(el => el.remove());
      document.querySelectorAll(".success-message").forEach(el => el.remove());

      let isValid = true;

      
      if (!nameInput.value.trim()) {
        showError(nameInput, "Name is required.");
        isValid = false;
      }

      
      if (!contactInput.value.trim() || !/^\d+$/.test(contactInput.value)) {
        showError(contactInput, "Contact number must be valid.");
        isValid = false;
      }

      
      if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        showError(emailInput, "Enter a valid email.");
        isValid = false;
      }

      
      if (!orgInput.value.trim()) {
        showError(orgInput, "Organization name is required.");
        isValid = false;
      }

      
      if (!messageInput.value.trim()) {
        showError(messageInput, "Message cannot be empty.");
        isValid = false;
      }

      
      if (!captchaCheckbox.checked) {
        showError(captchaCheckbox, "Please verify you are not a robot.");
        isValid = false;
      }

      
      if (isValid) {
        showSuccess("Form submitted successfully!");
        form.reset(); 
        setTimeout(() => {
          document.querySelector(".success-message").remove();
        }, 5000);
      }
    });

    
    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error-message text-red-500 text-sm mt-1";
      error.textContent = message;
      input.parentElement.appendChild(error);
    }

    
    function showSuccess(message) {
      const success = document.createElement("div");
      success.className = "success-message text-green-500 text-lg mt-4";
      success.textContent = message;
      form.appendChild(success);
    }
  });
  





