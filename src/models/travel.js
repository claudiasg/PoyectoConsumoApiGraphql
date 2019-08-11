import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from './db';

class Travel extends Model {}
Travel.init(
	{
		description: DataTypes.STRING,
		days: DataTypes.INTEGER,
		personId: DataTypes.INTEGER
	},
	{
		sequelize
	}
);

export default Travel;
