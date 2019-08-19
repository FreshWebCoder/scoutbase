const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AuthenticationError, UserInputError } = require('apollo-server');

const createToken = async (user, secret, expiresIn) => {
    const { id, name } = user;
    return await jwt.sign({ id, name }, secret, {
        expiresIn,
    });
};

module.exports = {
    Mutation: {
        login: async (parent, { name, password }, { models, secret }) => {
            const user = await models['users'].findOne({
                where: { name }
            });

            if (!user) {
                throw new UserInputError(
                    'No user found with this credentials.',
                );
            }

            const isValid = bcrypt.compareSync(password, user.password);

            if (!isValid) {
                throw new AuthenticationError('Invalid password.');
            }

            return { token: await createToken(user, secret, '30m'), user };
        },

        createUser: async (parent, { name, password }, { models, secret }) => {
            const user = await models['users'].create({
                name,
                password: bcrypt.hashSync(password, 10)
            });

            return { token: await createToken(user, secret, '30m'), user };
        },
    }
};
