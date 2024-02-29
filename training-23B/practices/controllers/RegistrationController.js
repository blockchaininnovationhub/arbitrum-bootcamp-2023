const validator = require("validator");
const UserModel = require("./../models/userModel");
const {Op} = require('sequelize')

async function RegistrationController(req, res) {

    const {email, password } = req.body;

    if(!email) {
        return res.status(400).json({message: 'email not found'})
    }

    if(!password) {
        return res.status(400).json({message: 'password not found'})
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
            [Op.or]: [{
                email: lowerCaseEmail
            }]
        }
    })

    if(user) {
        return res.status(401).json({message: "email already exists"})
    }

    const newUser = await UserModel.create({
        email: lowerCaseEmail,
        password
    })

    await newUser.save();
 

    return res.json({message: "registration completed"})

}

module.exports = RegistrationController