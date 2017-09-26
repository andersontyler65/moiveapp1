
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'movie1', year: 2001, director_id: 1},
        {id: 2, title: 'movie2', year: 2017, director_id: 2},
        {id: 3, title: 'movie3', year: 1995, director_id: 3}
      ]);
    });
};
