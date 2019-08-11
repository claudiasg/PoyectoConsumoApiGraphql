import Sequelize from 'sequelize';
import sequelConfig from '../config/config.json';

const env = process.env.NODE_ENV || 'development';
const config = sequelConfig[env];

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize;
