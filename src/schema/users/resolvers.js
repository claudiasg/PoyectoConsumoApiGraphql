import User from '../../models/user';

const UsersResolvers = {
	Query: {
		async me(root, args, { user }) {
      if(!user) throw new Error("You are not authenticated!");

      return await User.findByPk(user.id);
    },
		async users(root, args, context) {
      console.log(context);
      
			return await User.findAll();
		},
		async user(root, args, context) {
			return await User.findByPk(args.id);
		}
	}
};

export default UsersResolvers;
