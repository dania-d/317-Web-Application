const checkUsername = (username) => {
    let usernameChecker = /^\D\w{2,}$/;
    return usernameChecker.test(username);
}

const checkPassword = (password) => {
    let passwordChecker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[(/*-+!@#$^&*)]).{8,}/;
    return passwordChecker.test(password);

}

const checkEmail = (email) => {

}

const registerValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    if(!checkUsername(username)){
        req.flash('error', "invalid username!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else if(!checkPassword(password)) {
        req.flash('error', "invalid password!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }
    else {
        next();
    }
}
const loginValidator = (req, res, next) => {

}

module.exports = {registerValidator, loginValidator};