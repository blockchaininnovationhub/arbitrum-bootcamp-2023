const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const validator = require("validator");
const UserModel = require("./../userModel");
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

async function LoginWithWalletController(req, res) {

    const {timestamp, signature } = req.body;

    const address = verifyMessage(timestamp, signature)
    const lowerCaseAddress = address.toLowerCase()

    const user = await UserModel.findOne({
        where: {
            address: lowerCaseAddress
        }
    })

    if(!user) {
        return res.status(401).json({message: "invalid credentials"})
    }

    const parsedTimestamp = parseInt(timestamp)

    if(Date.now() +  (1000 * 30) > timestamp && Date.now() - (1000 * 30) > timestamp) {
        return res.status(401).json({message: "signature expired"})
    }

    const accessToken = jwt.sign({id: user.id, email: user.email, address: user.address}, process.env.SECRET)

    return res.status(200).json({accessToken})
    
}


module.exports = { LoginWithEmailController, LoginWithWalletController }