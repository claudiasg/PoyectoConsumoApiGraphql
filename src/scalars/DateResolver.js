import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'moment';

moment.locale('es');

const DateResolver = {
	Date: new GraphQLScalarType({
		name: 'Date',
		description:
      'the Date scalar type represents a specific date withour hour, represented as UTF-8 character sequences. This type is implemented by Moment.JS',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return moment(value).format('L');
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING || ast.kind === Kind.INT) {
        return new Date(moment(ast.value).millisecond);
      }
      return null;
    }
	})
};

export default DateResolver;