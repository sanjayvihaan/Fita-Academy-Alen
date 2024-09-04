//API URL 
const APIURL = "http://localhost:3005/send-email";
const sendEmailBtn = document.getElementById('sendMail');

// Email Data
let emailData = {
    "personalizations": [
        {
            "to": [
                {
                    "email": "sanjayvihaan111@gmail.com"
                }
            ],
            "subject": "Email from fetch API"
        }
    ],
    "from": {
        "email": "vihaansanjay1212@gmail.com"
    },
    "content": [
        {
            "type": "text/plain",
            "value": "This is a test mail from fetch API"
        }
    ]
};


function sendEmail() {
    console.log("Email Data beign Sent", emailData)
    fetch(APIURL, {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData),
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        console.log("Response from server:", data);
    })
    .catch(error => {
        console.error("Error sending email:", error);
    });
}

// sendEmail();
sendEmailBtn.addEventListener('click', sendEmail);