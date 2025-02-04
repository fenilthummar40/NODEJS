const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "fenilthummar40@gmail.com",
        pass: "qhcuevleduxpzjbw"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailOptn = {
        from: "fenilthummar40@gmail.com",
        to: to,
        subject: "Verification OPT",
        text: `Your verification OTP is ${otp}`
    }
    transport.sendMail(mailOptn, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

