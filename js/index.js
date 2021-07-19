function myFunction() {
    document.getElementById("ent").innerHTML = "I was clicked."
}
firebase.initializeApp(firebaseConfig);

let contactInfo= firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

    let name= document.querySelector(".name").value;
    let email= document.querySelector(".email").value;
    let message= document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}
function saveContactInfo(name, email, message){
    let newContactInfo= contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });

    retrieveInfos();
}
function retrieveInfos() {
    let ref=  firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info= data.val();
    let keys= Object.keys(info);

    for (let i=0; i<keys.length; i++) {
        let infoData= keys[i];
        let name= info[infoData].name;
        let email= info[infoData].email;
        let message = info[infoData].message;
        console.log(name,email,message);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML +=  `<div>
        <p><strong>Name: <strong/>${name} <br/>
        <a><strong>Email: <strong/>${email}</a> <br/>
        <a><strong>Message: <strong/>${message}</a>
        </p>
        </div>`;
    }
    }
retrieveInfos();





function sendEmail(name ,email ,message) {
    Email.send({
        Host:"smtp.gmail.com",
        Username:"aosongco@gmail.com",
        Password:"vphefbjicotergkc",
        To: "aosongco@gmail.com",
        From:"aosongco@gmail.com",
        Subject: '${name} sent you a message',
        Body: 'Name: ${name} <br/> Email:${email} ,br/> Message: ${message}',
    }).then((message) => alert("mail sent successfully"));
}