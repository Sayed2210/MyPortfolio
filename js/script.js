// dtxlvjhvgvmumwms
const btn = document.querySelector("#submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var text = document.getElementById("text").value;
  var subject = document.getElementById("subject").value;
  var body = ` name is ${name} 
                email : ${email}
                title: ${text}
                phone: ${number}
                subject ${subject}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eh600039@gmail.com",
    Password: "dtxlvjhvgvmumwms",
    To: "eh600039@gmail.com",
    From: email,
    Subject: text,
    Body: body,
  }).then(alert("Send"));
  console.log(body);
});
