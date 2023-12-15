// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKqj3MF4W6K8jqOraE3P3zwebangvIFZI",
  authDomain: "yrf-pushnotify.firebaseapp.com",
  databaseURL: "https://yrf-pushnotify.firebaseio.com",
  projectId: "yrf-pushnotify",
  storageBucket: "yrf-pushnotify.appspot.com",
  messagingSenderId: "363075194691",
  appId: "1:363075194691:web:650e34eb65799cce",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

Notification.requestPermission().then(function (permission) {
  if (permission === "granted") {
    console.log("Notification permission granted.");
    if (isTokenSentToServer()) {
      console.log("Token already sent");
    } else {
      getRegisterToken();
    }

    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  } else {
    console.log("Unable to get permission to notify.");
  }
});

function getRegisterToken() {
  // Get Instance ID token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging
    .getToken()
    .then(function (currentToken) {
      if (currentToken) {
        saveToken(currentToken);
        console.log(currentToken);
        sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log(
          "No Instance ID token available. Request permission to generate one."
        );
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    })
    .catch(function (err) {
      console.log("An error occurred while retrieving token. ", err);
      // showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);
    });
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem("sentToServer", sent ? "1" : "0");
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log("Sending token to server...");
    // TODO(developer): Send the current token to your server.
    setTokenSentToServer(true);
  } else {
    console.log(
      "Token already sent to server so won't send it again " +
        "unless it changes"
    );
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem("sentToServer") === "1";
}

function saveToken(currentToken) {
  $.ajax({
    type: "POST",
    url: "/YRFService.asmx/AddEndPointtoken",
    data: { endpoint: currentToken },
    dataType: "json",
    success: function (response) {
      alert("Push Notifications successfully registered !");
    },
    failure: function (response) {
      console.log("Push Notifications not registered!");
    },
  });
}

messaging.onMessage(function (payload) {
  console.log("Message received. ", payload);
});
