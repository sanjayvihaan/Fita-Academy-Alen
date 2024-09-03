// API Key
const API_KEY = "";
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Example proxy
const APIURL = 'https://api.mailersend.com/v1/email';

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
        email: 'vihaansanjay1212@gmail.com'
    },

    content: [
        {
            type: 'text/plain',
            value: 'This is a test email send using SendGrid and Fetch API in JS'
        }
    ]
}

// console.log(emailData);

// let emailStringfy = JSON.stringify(emailData);
// console.log(emailStringfy);


function sendEmail() {
    fetch(APIURL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData),
        mode: 'no-cors'
    })
    .then(response => {
        if(response.ok) {
            console.log('Email Sent Successfully!');
        } else {
            console.error('Failed to send email: ', response.statusText)
        }
    })
    .catch(error => {
        console.error("Error sending email: ", error)
    });
        
}
sendEmail();