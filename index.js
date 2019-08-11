import { ApolloServer } from 'apollo-server';
import { types, resolvers } from './src/index';
import User from './src/models/user';

import './src/models/associations';

const server = new ApolloServer({
	typeDefs: types,
	resolvers: resolvers,
	context: async ({ req }) => {
		const token = req.headers.authorization;

		if (token) {
			const user = await User.getUser(token);
			return { user };
		}
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNTY0NTIxMzQxLCJleHAiOjE1OTYwNzg5NDF9.a3M2zfFLM9Kiy3w8E6Fh0_yrZtKfhvkOUnfPKX7lucw
