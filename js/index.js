function myFunction() {
    document.getElementById("ent").innerHTML = "I was clicked."
}
function sendEmail(name,email,message) {
    email.send({
        Host:"smtp.gmail.com",
        Username:"aosongco@gmail.com",
        Password:"vphefbjicotergkc",
        To: "aosongco@gmail.com",
        From:"aosongco@gmail.com",
        Subject: '${name} sent you a message',
        Body: 'Name: ${name} <br/> Email:${email} ,br/> Message: ${message}',
    }).then((message) => alert("mail sent successfully"))
}