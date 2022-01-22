const sendEmail = require('../config/mailer');

const welcomeEmail = async (req, username, email, secretToken) => {
    const html = `
        Welcome to BRUMIS Cosmetics ${username}, we're excited to have you join us.
        <br/>
        <br/>
        You can copy and paste the following token <strong>${secretToken}</strong> in the confirmation page
        or click on the link below to activate you account.
        <br/><br/>
        confirmation Link: https://${req.headers.host}/user/confirm-account/${secretToken}
        <br/>
        <br/>
        BRUMIS Cosmetics, bringing your skin the best experience!!!!!!!!
        <br/>
        <br/>
        Cheers,
        <br/>
        <strong>BRUMIS Cusmetics Team</strong>
    `;

    await sendEmail (
        'support@BRUMISCusmetics.com',
        email,
        'Welcome to BRUMIS Cusmetics',
        html
    );
}


module.exports = welcomeEmail;