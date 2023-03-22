<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtYMREhgf0Vo4KUA6RxfbfcEdDygqDWy4",
    authDomain: "qr-and-barcode-scanner-6f839.firebaseapp.com",
    projectId: "qr-and-barcode-scanner-6f839",
    storageBucket: "qr-and-barcode-scanner-6f839.appspot.com",
    messagingSenderId: "697524153166",
    appId: "1:697524153166:web:c4dc1e396e97fc38030c1f",
    measurementId: "G-MWSSER42YT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
