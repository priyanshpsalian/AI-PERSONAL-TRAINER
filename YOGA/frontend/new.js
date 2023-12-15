const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json"); // Replace with the path to your app credentials
// import serviceAccount from "./serviceAccountKey.json";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yrf-pushnotify.firebaseio.com", // Replace with your Firebase database URL
});

const database = admin.database();
const ref = database.ref("/path/to/data");

ref.once("value", (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
