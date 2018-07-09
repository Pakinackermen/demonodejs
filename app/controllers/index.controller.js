exports.runder = function(req, res)  {
    // console.log(112);
    var isLoggedIn =false;

    if(typeof req.session.remember !== 'undefined'){
        isLoggedIn = req.session.remember;
    }
    res.render('index', { 
        title: 'Hey',
        isLoggedIn: isLoggedIn })   
}
