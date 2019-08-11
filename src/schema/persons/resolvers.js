import Person from '../../models/person';
import Travel from '../../models/travel';
import { isLogged } from '../../helpers/auth';

const Resolvers = {
	Query: {
		persons: isLogged(async () => {
			const persons = await Person.findAll();
			return persons;
		}),
		person: isLogged(async (_, { id }) => {
			const person = await Person.findByPk(id);
			return person;
		})
	},
	Person: {
		async travels(parent, _) {
			return await parent.getTravels();
		}
	}
};

export default Resolvers;
