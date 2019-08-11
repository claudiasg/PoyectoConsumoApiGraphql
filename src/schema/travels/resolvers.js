import { Op } from 'sequelize';

import Travel from '../../models/travel';
import Person from '../../models/person';
import { isLogged } from '../../helpers/auth';

const resolvers = {
	Query: {
		travels: isLogged(async (parent, args) => {
			const travels = await Travel.findAll();
			return travels;
		}),
		travel: isLogged(async (parent, { id }) => {
			const travel = await Travel.findByPk(id);
			return JSON.stringify(travel);
		}),
		travelByName: isLogged(async (parent, { description }) => {
			return await Person.findAll({
				where: {
					[Op.like]: description
				}
			});
		})
	},
	Travel: {
		async person(parent, args) {
			return await parent.getPerson();
		}
	}
};

export default resolvers;
