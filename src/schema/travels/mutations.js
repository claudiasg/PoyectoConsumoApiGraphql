import Travel from '../../models/travel';

import { isLogged } from '../../helpers/auth';

const Mutation = {
	Mutation: {
		createTravel: isLogged(async (parent, args) => {
			const { description, personId, days } = args;
			const newTravel = await Travel.create({
				description,
				personId,
				days
			});
			return newTravel;
		})
	}
};

export default Mutation;
