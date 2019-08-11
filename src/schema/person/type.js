import { gql } from 'apollo-server';

export default gql`
	type Person {
		id: ID!
		name: String!
		address: String
		travels: [Travel]
		createdAt: Date
		updatedAt: Date
	}

	extend type Mutation {
		createPerson(name: String!, address: String): Person
	}

	extend type Query {
		persons: [Person]
		person(id: ID!): Person
	}
`;
