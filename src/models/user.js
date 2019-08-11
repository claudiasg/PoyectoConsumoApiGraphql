import { DataTypes } from 'sequelize';
import sequelize from './db';
import jwt from 'jsonwebtoken';

const User = sequelize.define(
	'User',
	{
		username: DataTypes.STRING,
		name: DataTypes.STRING,
		password: DataTypes.STRING
	},
	{}
);

User.associate = function(models) {
	// associations can be defined here
};

User.getUser = async (token) => {
	const parsed = jwt.decode(token);
	return await User.findByPk(parsed.id);
};

export default User;
