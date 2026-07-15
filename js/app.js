// app.js
import { loginWithGoogle, loginWithEmail, registerWithEmail } from "./auth.js";
import { saveUserData } from "./dbService.js";

// Example handlers for your HTML UI elements
const googleBtn = document.getElementById("google-signin-btn");

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      const user = await loginWithGoogle();
      // Step 13: Save user data after login
      await saveUserData(user);
      window.location.href = "dashboard.html"; // Redirect to a private page
    } catch (error) {
      alert("Authentication failed: " + error.message);
    }
  });
}
