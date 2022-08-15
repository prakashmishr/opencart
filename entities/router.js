const homeRoutes = require('./home/routes/homeRoutes');
const userSignup = require('./user/routes/signupUserRoutes')
const userLogin = require('./user/routes/loginUserRoutes')
const adminDashRoutes = require('./admin/router/adminDashRouter')
const adminAddProductRoutes = require('./admin/router/adminAddProductRoutes')
const homeProductDetailsRoute = require('./home/routes/homeProductDetailsRoute')
const confirmUserEmail = require('./user/routes/confirmUserEmail')
const forgotPasswordRoutes = require('./user/routes/forgetPasswordRoutes')
const resetPassword = require('./user/routes/resetPasswordRouter')
const userCartRouter = require('./user/routes/userCartRouter')

module.exports = function initRoutes(app) {
    app.use("/", homeRoutes);
    app.use("/user/signup", userSignup);
    app.use("/user/login", userLogin);
    app.use("/user/confirm",confirmUserEmail);
    app.use("/user/forgot",forgotPasswordRoutes);
    app.use("/admin", adminDashRoutes);
    app.use("/admin", adminAddProductRoutes);
    app.use("/product",homeProductDetailsRoute);
    app.use("/user/forgot/user",resetPassword);
    app.use('/user/cart',userCartRouter)

}