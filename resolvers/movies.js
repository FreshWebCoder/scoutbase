module.exports = {
    Query: {
        movies: async (parent, args, { models, secret, authenticated }) => {
            const movies = await models['movies'].findAll();
            if (authenticated) {
                for (let i = 0; i < movies.length; i ++) {
                    movies[i].scoutbase_rating = (5 + Math.random() * 4).toFixed(1)
                }
            }

            return movies;
        },
    },

    Movie: {
        actors: async (movie, args, { models }) => {
            return models['actors'].findAll({
                where: {
                    movie_id: movie.id
                }
            });
        }
    },

    Actor: {
        directors: async (actor, args, { models }) => {
            return models['directors'].findAll({
                where: {
                    actor_id: actor.id
                }
            });
        }
    }
};
