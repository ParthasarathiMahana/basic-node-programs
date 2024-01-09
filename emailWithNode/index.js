const mailer = require('nodemailer')


async function sendTheTestMail(){
    // 1. create transporter
    const transporter = mailer.createTransport({
        service: "gmail",
        auth:{
            user:"parthasarathimahana@gmail.com",
            pass: "ycjm dlcc scpp qqjb"
        }
    })

    // 2. mail options
    const mailOptions = {
        from: "parthasarathimahana@gmail.com",
        to:"parthasarathi.m@kalvium.com",
        subject:"test email",
        text:"This is a test mail"
    }

    // 3. send mail
    try{
        const result = await transporter.sendMail(mailOptions)
        console.log("mail sent successfuly");
    }catch(err){
        console.log("Got an error while sending the mail ",err);
    }
}

sendTheTestMail()