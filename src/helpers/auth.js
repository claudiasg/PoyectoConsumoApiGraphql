export const isLogged = (next) => (parent, args, context, info) => {
	const { user } = context;
	if (!user) throw new Error('User not logged');

	return next(parent, args, context, info);
};
