exports.get = (req, res) => {
    // res.send('Server is runnig now');
    res.render('login',{
        js: 'domSignupLogin'
    })
}
