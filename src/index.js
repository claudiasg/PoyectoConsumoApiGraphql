import { gql } from 'apollo-server';

// Types
import Travels from "./schema/travels/TravelSchema";
import Persons from "./schema/persons/PersonSchema";
import Users from "./schema/users/UserSchema";

// Scalar resolvers
import DateResolver from "./scalars/DateResolver";

const MainTypes = gql`
  scalar Date

  type Query
  type Mutation
`;

export const types = [
  MainTypes,
  Travels.type,
  Persons.type,
  Users.type
]

export const resolvers = [
  DateResolver,
  Travels.resolvers,
  Travels.mutations,
  Persons.mutations,
  Persons.resolvers,
  Users.mutations,
  Users.resolvers
]
