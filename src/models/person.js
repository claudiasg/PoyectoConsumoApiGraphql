import { DataTypes, Model } from 'sequelize';
import sequelize from './db';

class Person extends Model {}

Person.init(
	{
		name: DataTypes.STRING,
		address: DataTypes.STRING
	},
	{
		sequelize
	}
);

export default Person;
