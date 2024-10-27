document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to the login form
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target);

    // Fetch request to login API
    fetch("process_login.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log("Response Data:", data); // Log the response data for debugging

        if (data.status === "otp_required") {
          console.log("OTP required, showing OTP container."); // Debugging log
          // Hide login form and show OTP container
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("otpContainer").style.display = "block";
          document.getElementById("otpUsername").value = data.username;
          startCountdown(30); // Start countdown timer for 30 seconds
        } else {
          alert("Invalid login credentials.");
        }
      })
      .catch((error) => console.error("Error:", error)); // Catch any errors
  });

  // Attach event listener to the OTP form
  document.getElementById("otpForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target);

    // Simulating OTP verification API response
    fetch("verify_otp.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Hide OTP container and show voting container
          document.getElementById("otpContainer").style.display = "none";
          document.getElementById("votingContainer").style.display = "block";
        } else if (data.status === "expired") {
          alert("OTP has expired.");
        } else {
          alert("Invalid OTP.");
        }
      })
      .catch((error) => console.error("Error:", error)); // Catch any errors
  });
});

// Countdown timer function
function startCountdown(duration) {
  let timer = duration,
    minutes,
    seconds;
  const countdownElement = document.getElementById("countdown");

  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownElement.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      alert("OTP has expired. Please request a new OTP.");
      // Optionally, reset forms here
      document.getElementById("otpContainer").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    }
  }, 1000);
}
