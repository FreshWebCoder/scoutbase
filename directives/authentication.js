const { AuthenticationError } = require('apollo-server-express');
const { SchemaDirectiveVisitor } = require('graphql-tools');
const { defaultFieldResolver } = require("graphql");

class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;

        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            const context = args[2];
            if (!context.authenticated) {
                throw new AuthenticationError('you must be logged in');
            }
            return result;
        };
    }
};

module.exports = AuthDirective;
