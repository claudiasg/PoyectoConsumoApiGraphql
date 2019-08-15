import { gql } from "apollo-server";

export default gql`
	type Travel {
		id: ID!
		description: String!
		personId: ID!
		days: Int
		person: Person
	}

	extend type Mutation {
		createTravel(description: String!, personId: ID!, days: Int): Travel
		updateTravel(id:ID!,description: String, personId: ID, days: Int): Travel
		deleteTravel(id:ID!):Boolean
	}

	extend type Query {
		travels: [Travel]
		travel(id: ID): Travel

	}

`;
