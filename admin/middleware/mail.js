const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "fenilthummar40@gmail.com",
        pass: "ncpbrwvxosnihxec",
    },
});

const sendOtp = (to,otp) => {
    console.log(otp)
    let mailOptions = {
        from: "fenilthummar40@gmail.com",
        to: to,
        subject: "Your OTP is Here",
        text: `Your otp is ${otp}`,
    };

    transport.sendMail(mailOptions, (err) => {
        err && console.log(err);
    });
};

module.exports = sendOtp;