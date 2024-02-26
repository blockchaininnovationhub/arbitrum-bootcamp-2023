const express = require("express")

const database = require("./database");
const dotenv = require('dotenv')
const AuthMiddleware = require('./middleware');
const { LoginWithEmailController, LoginWithWalletController } = require("./controllers/LoginController");
const RegistrationController = require("./controllers/RegistrationController");
const ProfileController = require("./controllers/ProfileController");
const WalletSignerViewController = require("./controllers/WalletSignerViewController");

dotenv.config()

const app = express()
app.use(express.json())


app.set('view engine', 'ejs')

app.post('/login/email', LoginWithEmailController)
app.post('/login/wallet', LoginWithWalletController)
app.post('/register', RegistrationController)
app.get('/profile', AuthMiddleware, ProfileController)
app.get('/signer', WalletSignerViewController)

app.listen(3000, function () {
    console.log("server started")
    database.sync(function () {
        console.log("database started")
    })
})