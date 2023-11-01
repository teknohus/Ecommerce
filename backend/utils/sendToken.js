const sendToken = (user, statusCode, res) => {
    
    COOKIE_EXPIRE=5

    const token = user.getJWTToken();


    const options = {
        expires: new Date(
            Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    });
}

module.exports = sendToken;