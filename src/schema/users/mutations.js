import User from '../../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
require('dotenv').config()

const sign = (user) => jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1y' });

const UsersMutation = {
	Mutation: {
		async signup(_, args, context) {
			if (context.currentUser) return;
			const { name, username, password } = args;

			const newUser = await User.create({
				name,
				username,
				password: await bcrypt.hash(password, 10)
			});
			return sign(newUser)
		},

		async login(_, { username, password }) {
			const user = await User.findOne({ where: { username } });
			
			if(!user) throw new Error("Incorrect user or password");
			const valid = await bcrypt.compare(password, user.password);

			if(!valid) throw new Error("Incorrect user or password");

			return sign(user)
		}
	}
};

export default UsersMutation;
