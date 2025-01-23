import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) {
            return res.json({ success: false, message: "not authorize login again" })
        }
        let newToken = token.slice(7, token.length)

        const token_decode = jwt.verify(newToken, process.env.jwt_SECRET);
        // console.log(token_decode);

        let email = token_decode.slice(0, 17)
        let pass = token_decode.slice(17, token_decode.length)


        // console.log(pass);



        if (email !== process.env.ADMIN_EMAIL && pass !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "not authorize login again" })
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
export default adminAuth