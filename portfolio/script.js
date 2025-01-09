document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("info");
  
    // Handle form submission
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Extract form data
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      const formData = { name, email, message };
  
      try {
        // Send data to the server
        const response = await fetch("send-email.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Your message has been sent successfully!");
          form.reset(); // Clear the form
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        alert("Failed to send your message. Please try again later.");
      }
    });
  });
  