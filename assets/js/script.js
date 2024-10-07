function sendEmail() {
    // Define parameters
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Initiate EmailJS
    emailjs.send("service_khpy174", "template_53voat4", params).then(alert("Your message has been sent. Thank you!"))

}