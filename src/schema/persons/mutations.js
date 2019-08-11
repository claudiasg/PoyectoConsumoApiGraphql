import Person from '../../models/person';
import { isLogged } from '../../helpers/auth';

const Mutations = {
	Mutation: {
		createPerson: isLogged(async (_, args) => {
			const { name, address } = args;
			const newPerson = await Person.create({
				name,
				address
			});
			return newPerson;
		})
	}
};

export default Mutations;
