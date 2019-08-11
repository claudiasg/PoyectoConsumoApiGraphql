import Person from './person';
import Travel from './travel';
import sequelize from './db';

Travel.belongsTo(Person, { as: 'Person', foreignKey: 'personId' });

Person.hasMany(Travel, {
	as: 'Travels',
	foreignKey: 'personId'
});

(async () => {
	await sequelize.sync();
})();
