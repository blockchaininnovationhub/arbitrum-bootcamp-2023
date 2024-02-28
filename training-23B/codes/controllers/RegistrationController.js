const validator = require("validator");
const UserModel = require("./../models/userModel");
const {isAddress} = require("ethers")
const {Op} = require('sequelize')

async function RegistrationController(req, res) {

    const {email, password, address} = req.body;

    if(!email) {
        return res.status(400).json({message: 'email not found'})
    }

    if(!address) {
        return res.status(400).json({message: 'address not found'})
    }

    if(!password) {
        return res.status(400).json({message: 'password not found'})
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({message: 'email is not valid'})
    }


    if(!isAddress(address)) {
        return res.status(400).json({message: 'address is not valid'})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({message: 'password is weak'})
    }

    const lowerCaseEmail = email.toLowerCase()
    const lowerCaseAddress = address.toLowerCase()


    const user = await UserModel.findOne({
        where: {
            [Op.or]: [{
                address: lowerCaseAddress,
                email: lowerCaseEmail
            }]
        }
    })

    if(user) {
        return res.status(401).json({message: "email or address already exists"})
    }

    const newUser = await UserModel.create({
        email: lowerCaseEmail,
        address: lowerCaseAddress,
        password
    })

    await newUser.save();
 

    return res.json({message: "registration completed"})

}

module.exports = RegistrationController