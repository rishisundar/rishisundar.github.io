//Reference Messages collection
var regRef = firebase.database().ref('registrations');

// Listen for form submit
document.getElementById('regform').addEventListener('submit', regForm);

//Submit Form
function regForm(e) {
    e.preventDefault();
    console.log("Default behavious prevented");
    var name = getInputVal('rname');
    var email = getInputVal('remail');
    var rno = getInputVal('rno');
    var paper = getRVal('paper');
    var quiz = getRVal('quiz');
    var debug = getRVal('debug');
    var idea = getRVal('idea');
    var dev = getRVal('dev');
    var model = getRVal('model');
    var ewaste = getRVal('ewaste');
    var draw = getRVal('draw');
    var poster = getRVal('poster');
    var dubsmash = getRVal('dubsmash');
    var connexion = getRVal('connexion');
    console.log(name + " " + rno + " " + connexion + "\n");
    //Save message call
    saveReg(name, email, rno, paper , quiz , debug , idea , dev , model , ewaste , draw , poster , dubsmash , connexion);
    //Show alert
    document.querySelector('.regalert').style.display = 'block';
    //Hide alert timeout
    setTimeout(function(){
      document.querySelector('.regalert').style.display = 'none';
    },3000);
    //Reseting the form
    document.getElementById('regform').reset();
}

//Get Form Value funciton
function getInputVal(id) {
    return document.getElementById(id).value;
}
function getRVal(id){
    return document.getElementById(id).checked;
}

//Save data to firebase
function saveReg(name, email, rno, paper , quiz , debug , idea , dev , model , ewaste , draw , poster , dubsmash , connexion){
    var newRegRef = regRef.push();
    newRegRef.set({
        name: name,
        email: email,
        rno: rno,
        paper: paper,
        quiz: quiz,
        debug: debug,
        idea: idea,
        dev: dev,
        model: model,
        ewaste: ewaste,
        draw: draw,
        poster: poster,
        dubsmash: dubsmash,
        connexion: connexion
    });
}