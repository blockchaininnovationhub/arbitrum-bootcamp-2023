const express = require("express")

const database = require("./database");
const dotenv = require('dotenv')
const AuthMiddleware = require('./middleware');
const { LoginWithEmailController } = require("./controllers/LoginController");
const RegistrationController = require("./controllers/RegistrationController");
const ProfileController = require("./controllers/ProfileController");
const GetWalletAddressController = require("./controllers/GetWalletAddressController");
const GetWalletBalanceController = require("./controllers/GetWalletBalance");
const TransferEtherController = require("./controllers/TransferEtherController");

dotenv.config()

const app = express()
app.use(express.json())


app.set('view engine', 'ejs')

app.post('/login/email', LoginWithEmailController)
app.post('/register', RegistrationController)
app.get('/profile', AuthMiddleware, ProfileController)
app.get('/wallet/address', AuthMiddleware, GetWalletAddressController)
app.get('/wallet/balance', AuthMiddleware, GetWalletBalanceController)
app.get('/wallet/transfer', AuthMiddleware, TransferEtherController)

// app.get('')



app.listen(3000, function () {
    console.log("server started")
    database.sync(function () {
        console.log("database started")
    })
})