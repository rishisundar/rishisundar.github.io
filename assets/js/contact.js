  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBAVworOFVhbb2wkDT9R839pzko90megvM",
      authDomain: "utsav18-9f899.firebaseapp.com",
      databaseURL: "https://utsav18-9f899.firebaseio.com",
      projectId: "utsav18-9f899",
      storageBucket: "",
      messagingSenderId: "932953148529"
  };
  firebase.initializeApp(config);
  //Reference Messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);

  //Submit Form
  function submitForm(e) {
      e.preventDefault();
      console.log("Default behavious prevented");
      var name = getInputVal('name');
      var email = getInputVal('email');
      var message = getInputVal('message');
      console.log(name + " " + email + " " + message + "\n");
      //Save message call
      saveMessage(name, email, message);
      //Show alert
      document.querySelector('.alert').style.display = 'block';
      //Hide alert timeout
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
      //Reseting the form
      document.getElementById('contactform').reset();
  }

  //Get Form Value funciton
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  //Save data to firebase
  function saveMessage(name, email, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          message: message
      });
  }