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
		}),
		updateTravel: isLogged(async (_, args) => {
		const { id, description, personId,days } = args;
		const travel=await Travel.findByPk(id);
		const updatedTravel = await travel.update({
			description,
			personId,
			days
		});
		return updatedTravel;
	}),
	deleteTravel:isLogged(async (_, args) => {
	const { id } = args;
	const travel=await Travel.findByPk(id);
	return await travel.destroy();

	})
	}
};

export default Mutation;
