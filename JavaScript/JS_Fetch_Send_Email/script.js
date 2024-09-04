// API Key
const API_KEY = "6eb5cbf4362edd020cc4cb22529a5878";
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Example proxy
const APIURL = 'http://localhost:3005/send-email';

// https://api.sendgrid.com/v3/mail/send

//Email Data:
let emailData = {
    personalizations: [
      {
        to: [
          {
            email: "sanjayvihaan111@gmail.com"
          }
        ],
        subject: "Hello mail is from JS Fetch"
      }
    ],
    from: {
      email: "vihaansanjay1212@gmail.com"
    },
    content: [
      {
        type: "text/plain",
        value: "This is a test email sent using Nodemailer and Fetch API in JS"
      }
    ]
};


// console.log(emailData);

// let emailStringfy = JSON.stringify(emailData);
// console.log(emailStringfy);


function sendEmail() {
    fetch(APIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData),
        mode: 'no-cors'
    })
    // .then(response => {
    //     if(response.ok) {
    //         console.log('Email Sent Successfully!');
    //     } else {
    //         console.error('Failed to send email: ', response.statusText)
    //     }
    // })
    // .catch(error => {
    //     console.error("Error sending email: ", error)
    // });
    .then((response) => response.json())
    .then((data) => {
        console.log("Response from server:", data);
    })
    .catch((error) => {
        console.error("Error sending email:", error);
    });
}
sendEmail();