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
	}

	extend type Query {
		travels: [Travel]
		travel(id: ID): Travel
		travelByName(description: String): [Travel]
	}

`;