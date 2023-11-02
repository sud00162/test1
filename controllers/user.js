const UserSchema = require('../models/userModel.js');

exports.CourseUser = async (req, res) => {
    const { name, email, course, mobile } = req.body;
    const newUser = new UserSchema({ name, email, course, mobile });
    try {
        await newUser.save();
        res.status(201).send('Thank you for your registration');
    } catch (error) {
        res.status(500).send('Error submitting form');
    }
};
