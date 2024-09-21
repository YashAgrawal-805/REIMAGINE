const jwt = require("jsonwebtoken");
const userModel = require("../models/Users");

module.exports = async (req, res, next) => {
    if (!req.cookies.token) {
        console.log("No token found, redirecting to login");
        return res.redirect("/");
    }

    try {
        // Verify JWT token
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY); // Log the decoded token

        // Find user by email and exclude the password field
        let user = await userModel.findOne({ email: decoded.email }).select("-password");

        // If user is not found, redirect to login page
        if (!user) {
            console.log("User not found, redirecting to login");
            return res.redirect("/");
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (err) {
        console.error("Error verifying token: ", err);
        return res.redirect("/");
    }
};
