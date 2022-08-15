const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    'f5ea49aec11cf41abf33c50ac77c1ef4',
    'ff8ae0eed07b01d47dcd43874038625c',
);


module.exports = (userEmail, userName, subject, body) => {
     const request = mailjet
        .post('send', {
            version: 'v3.1'
        })
        .request({
            Messages: [{
                From: {
                    Email: "pkm181020@gmail.com",
                    Name: "Open Cart"
                },
                To: [{
                    Email: userEmail,
                    Name: userName
                }],
                Subject: subject,
                TextPart: "Dear +userName+, welcome to OpenCart! May the cart brings happiness for you!",
                HTMLPart: body
            }]
        })

        return request;

}

// request
//     .then((result) => {
//         console.log(result.body)
//     })
//     .catch((err) => {
//         console.log(err.statusCode)
//     })