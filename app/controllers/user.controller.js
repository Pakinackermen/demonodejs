exports.login = (req, res) => {
    
    
    
    req.checkBody('email', 'Invalid Email').notEmpty();
    req.sanitizeBody('email').normalizeEmail();
    let errors = req.validationErrors();
    
    // console.log(req.body);
    console.log("Email: " + req.body.email);
    // console.log('Password: ' + req.body.password);
    console.log(req.ip);
    

    if(errors){
        res.render('index', {
            title: 'Login by ' + JSON.stringify(errors),
            isLoggedIn: false
        })
        return;
    }
    if(req.body.remember === 'remember'){
        req.session.remember = true;
        req.session.email = req.body.email;
        // req.sessionOptoins.maxAge = 5000; ตั้งเวลา session
    }

    res.render('index' ,{
        title: 'Login by ' + req.body.email, 
        isLoggedIn: true 
    })
}
exports.logout = (req, res) => {
    req.session = null;
    res.render('index',{
        title: 'Login',
        isLoggedIn: false
    })
}