import { gql, SchemaDirectiveVisitor } from 'apollo-server';

const UserSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    name: String!
    
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    me: User
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    login(username: String!, password: String!): String
    signup(username: String!, password: String!, name: String!): String
  }
`;

export default UserSchema;
