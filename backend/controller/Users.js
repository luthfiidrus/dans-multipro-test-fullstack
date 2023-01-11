import Users from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    })
    .then((user) => {
        if (user) {
            if (user.password === req.body.password) {
                const userId = user.id;
                const username = user.username;
                const email = user.email;
                const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '10m'
                });
                req.session.token = accessToken;
                res.status(200).json({ message: 'Login successful' });
            }
            else {
                res.status(400).json({ message: 'Wrong password' });
            }
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    })
    .catch((err) => {
        console.log(err);
    });
}