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
			return travel;
		}),

	},
	Travel: {
		async person(parent, args) {
			return await parent.getPerson();
		}
	}
};

export default resolvers;
