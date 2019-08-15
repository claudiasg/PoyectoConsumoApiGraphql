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
		}),
		updatePerson: isLogged(async (_, args) => {
		const { id, name, address } = args;
		const person=await Person.findByPk(id);
		const updatedPerson = await person.update({
			name,
			address
		});
		return updatedPerson;
	}),
	deletePerson:isLogged(async (_, args) => {
	const { id } = args;
	const person=await Person.findByPk(id);
	return await person.destroy();

	})
	}
};

export default Mutations;
