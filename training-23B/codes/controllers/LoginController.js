const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const validator = require("validator");
const UserModel = require("./../models/userModel");
const {verifyMessage} = require("ethers")


dotenv.config()

async function LoginWithEmailController(req, res) {

    const {email, password} = req.body;

    if(!email) {
        return res.status(400).json({message: 'email not found'})
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({message: 'email is not valid'})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({message: 'password is weak'})
    }

    const lowerCaseEmail = email.toLowerCase()

    const user = await UserModel.findOne({
        where: {
            email: lowerCaseEmail
        }
    })

    if(!user) {
        return res.status(401).json({message: "invalid credentials"})
    }

    const accessToken = jwt.sign({id: user.id, email: user.email, address: user.address}, process.env.SECRET)

    return res.json({accessToken})

}


module.exports = { LoginWithEmailController }